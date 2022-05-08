import React, { useState } from "react";
import HeadingHome from "../components/banner";
import { TextInput } from "../components/input";
import { Alert } from "../components/alert";
import { db } from "../firebase/firebase";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [documentId, setDocumentId] = useState(null);

  const handleCreateThinkTank = async () => {
    if (!question.length) {
      console.log("no question!");
      return;
    }
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
