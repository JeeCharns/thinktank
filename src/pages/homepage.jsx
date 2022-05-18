import React, { useMemo, useState } from "react";
import HeadingHome from "../components/banner";
import { TextInput } from "../components/input";
import { Alert } from "../components/alert";
import { db } from "../firebase/firebase";
import { Center, Spinner, Text, Box, VStack, Button } from "@chakra-ui/react";
import { Copylink } from "../components/copylink";
import { CopyIcon } from "@chakra-ui/icons";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState({ isLoading: false, id: 123 });

  console.log("response", response);

  const handleCreateThinkTank = async () => {
    // if the question length exists, we don't create a document
    // and may want to show an error or disable the button
    if (!question.length) {
      console.log("no question!");
      return;
    }

    setResponse({ isLoading: true, id: null });
    // otherwise, create a new document in the ThinkTanks collection
    // then set the document id to state so we can identify the ThinkTank
    await db
      .collection("ThinkTanks")
      .add({
        question,
      })
      .then((data) => {
        console.log(`woooo new document created with id ${data.id}`);
        setResponse({ isLoading: false, id: data.id });

        // add success toast here!!
      });
  };

  const renderPage = useMemo(() => {
    if (!response.id && !response.isLoading) {
      return (
        <>
          <TextInput
            question={question}
            setQuestion={setQuestion}
            onClick={handleCreateThinkTank}
          />
          <Alert />
        </>
      );
    } else if (!response.id && response.isLoading) {
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
              {/* <Button
                size="sm"
                variant="outline"
                color="orange.300"
                leftIcon={<CopyIcon />}
                borderColor="orange.300"
              >
                Copy link to clipboard.
              </Button> */}
              <Copylink />
            </VStack>
            <Box pos="fixed" bottom="25%">
              <Button
                bgColor="gray.700"
                color="white"
                variant="solid"
                size="lg"
              >
                Continue
              </Button>
            </Box>
          </Center>
        </Box>
      );
    }
  }, [question, response.id, response.isLoading]);

  return (
    <>
      <HeadingHome />
      {renderPage}
    </>
  );
};

export default Home;
