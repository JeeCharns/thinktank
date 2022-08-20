import {  Container, Text, Box, Spinner, Center, VStack, Button } from "@chakra-ui/react";
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import HeadingHome from "../components/banner";
import SubmitAnswer from "../components/submit";
import Sharelink from "../components/sharelink";
import Voting from "../components/voting";

// A helper function to get the query params in a url
// const useQuery = () => {
//   const search = useLocation();
//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const OtherPage = () => {

  const [, setThinktankDocRef] = useState(null);
  const [thinktankData, setThinktankData] = useState(null);

  const params = useParams();

  const [submit, setSubmit] = useState("");
  const [answer, setAnswer] = useState({ isLoading: false, id: null });

  const navigate = useNavigate();
  const home = () => {
        navigate('/');
    };
    

  useEffect(() => {
    // when the page loads...
    // we get the query params in the url so in "https://localhost/3000?id=1234"
    // the query params are id=1234
    const loadThinkTank = async () => {
      // we go to firebase and look for this documentId
      const docRef = db.collection('ThinkTanks').doc(params.id);
      const doc = await docRef.get({ source: "server" });
      if (!doc.exists) {
        // if it doesn't exist, we need to handle this error
        console.log("ooops - no document exists!!");
      } else {
        // if it does, we create a snapshot of the document and set it to state
        console.log("success!!! found the document");

        return docRef.onSnapshot((doc) => {
          setThinktankDocRef(docRef);
          setThinktankData(doc.data());
        });
      }
    }
    loadThinkTank();
  }, []);
  
  console.log(thinktankData?.question)

  const handleSubmitAnswer = async () => {

    if (!submit.length) {
      console.log("no question!");
      return;
    }

    setAnswer({ isLoading: true, id: null });
    // otherwise, create a new document in the ThinkTanks collection
    // then set the document id to state so we can identify the ThinkTank
    await db
      .collection("ThinkTanks")
      .add({
        answer,
      })
      .then((data) => {
        setAnswer({ isLoading: false, id: data.id });
      });
  };

  const renderPage = useMemo(() => {
    if (!answer.id && !answer.isLoading) {
      return (
        <>
             <Container pt={35} display="flex" alignItems="center" flexDir="column">
             <Text as="b" fontSize="lg" color="gray.700" textAlign="center" mb={50}>
             {thinktankData?.question}
             </Text>
             </Container>
             <SubmitAnswer 
            submit={submit}
            setSubmit={setSubmit}
            onClick={handleSubmitAnswer}
            /> 
          </>
      );
    } else if (!answer.id && answer.isLoading) {
      return (
        <Center p="50">
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="teal"
            size="lg"
          />
        </Center>
      );
    } else {
      return (
        <Box h="60%">
          <Center>
            <VStack paddingTop={10} spacing={4} maxWidth={400}>
              <Voting />
            </VStack>
            <Box pos="fixed" bottom="25%">
              <Button
                bgColor="gray.700"
                color="white"
                variant="solid"
                size="md"
                onClick={home}
              >
                We made it
              </Button>
            </Box>
          </Center>
        </Box>
      );
    }
  }, [submit, thinktankData, answer.id, answer.isLoading]);

  return (
    <>
    <Box pt={10} pb={1}>
      <Sharelink />
      </Box>
      <HeadingHome />
      <Box pb={5}>
      {renderPage}
      </Box>
      
    </>
  );
};


  export default OtherPage;