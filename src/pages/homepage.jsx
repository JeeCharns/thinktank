import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/input";
import logo from "../assets/Logo.png";
import { db } from "../firebase/firebase";
import {
  Center,
  Spinner,
  Box,
  Text,
  Image,
  Container,
  Flex,
  useDisclosure,
  Divider,
  Hide,
  Show,
} from "@chakra-ui/react";
import arrow from "../assets/arrow-down.svg";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { QuestionCard } from "../components/question-card";
import { Explainer } from "../components/explainer";
import { ExplainerDrawer } from "../components/explainer-drawer";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [latestThinkTanks, setLatestThinkTanks] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollRef = React.useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const loadThinkTanks = async () => {
      const q = query(
        collection(db, "thinktanks"),
        orderBy("createdAt", "desc"),
        limit(20)
      );

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setLatestThinkTanks(data);
    };
    loadThinkTanks();
  }, []);

  const handleCreateThinkTank = async () => {
    setLoading(true);
    await db
      .collection("thinktanks")
      .add({
        question,
        createdAt: new Date(),
      })
      .then((data) => {
        setLoading(false);
        navigate(`/${data.id}`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container p={0} maxW="375px">
      <Box
        pt={10}
        display="flex"
        alignItems="center"
        flexDir="column"
        minH="90vh"
        justifyContent="space-between"
      >
        <Center
          flexDir="column"
          flex={1}
          justifyContent="flex-start"
          px={6}
          mt={6}
        >
          <Box h="24px" />
          <Image
            src={logo}
            objectFit="cover"
            mt={{ base: 0, md: 6 }}
            alt="ThinkTank logo"
          />
          <Text
            textStyle="h3"
            as="button"
            fontSize={{ base: "xs", md: "md" }}
            fontWeight="bold"
            onClick={onOpen}
            color="orange.300"
            textDecor="underline"
            w="100%"
            mt={{ base: 3, md: 6 }}
            aria-label="Open explainer"
          >
            What is ThinkTank?
          </Text>
        </Center>
        {loading ? (
          <Center flex={1}>
            <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="gray.200"
              color="teal"
              size="lg"
            />
          </Center>
        ) : (
          <Box w="100%" flex={1} px={{ base: 8, md: 0 }}>
            <TextInput
              question={question}
              setQuestion={setQuestion}
              onClick={handleCreateThinkTank}
            />
          </Box>
        )}
        <Flex
          flex={1}
          alignItems="flex-end"
          as="button"
          onClick={() =>
            scrollRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
          aria-label="Scroll down arrow"
          mb={6}
        >
          <Image src={arrow} alt="Arrow pointing down" />
        </Flex>
      </Box>
      <Flex flexDir="column" pb={8} ref={scrollRef} minH="100vh">
        {latestThinkTanks.map((question, i) => (
          <Box key={question.id} w="100%">
            {i !== 0 && <Divider w="100%" />}
            <Box px={8}>
              <QuestionCard
                id={question.id}
                question={question.data.question}
                date={question.data.createdAt.toDate()}
                participants={question.data?.responses?.length || 0}
                votes={question.data?.totalVotes || 0}
              />
            </Box>
          </Box>
        ))}
      </Flex>
      <Show above="sm">
        <Explainer isOpen={isOpen} onClose={onClose} />
      </Show>
      <Hide below="sm">
        <ExplainerDrawer isOpen={isOpen} onClose={onClose} />
      </Hide>
    </Container>
  );
};

export default Home;
