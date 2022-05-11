import React, { useRef, useState } from "react";
import HeadingHome from "../components/banner";
import { TextInput } from "../components/input";
import { Alert } from "../components/alert";
import { db } from "../firebase/firebase";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState({isLoading: false, id: null})

  const handleCreateThinkTank = async () => {
    // if the question length exists, we don't create a document
    // and may want to show an error or disable the button
    if (!question.length) {
      console.log("no question!");
      return;
    }

   setResponse({isLoading: true, id: null})
    // otherwise, create a new document in the ThinkTanks collection
    // then set the document id to state so we can identify the ThinkTank
    await db
      .collection("ThinkTanks")
      .add({
        question,
      })
      .then((data) => {
        console.log(`woooo new document created with id ${data.id}`)
        setResponse({isLoading: false, id: data.id})
      })
  };


  return (
    <>
      <HeadingHome />
      <TextInput
        question={question}
        setQuestion={setQuestion}
        onClick={handleCreateThinkTank}
      />
      <Alert />
      {response.isLoading === true ? <Spinner /> : null}
    </>
  );
};

export default Home;
