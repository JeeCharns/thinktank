import React, { useState } from "react";
import HeadingHome from "../components/banner";
import { TextInput } from "../components/input";
import { Alert } from "../components/alert";
import { db } from "../firebase/firebase";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [documentId, setDocumentId] = useState(null);

  const handleCreateThinkTank = async () => {
    // if the question length exists, we don't create a document
    // and may want to show an error or disable the button
    if (!question.length) {
      console.log("no question!");
      return;
    }
    // otherwise, create a new document in the ThinkTanks collection
    // then set the document id to state so we can identify the ThinkTank
    await db
      .collection("ThinkTanks")
      .add({
        question,
      })
      .then((data) => setDocumentId(data.id));
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
    </>
  );
};

export default Home;
