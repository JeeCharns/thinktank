import React from "react";
import HeadingHome from "../components/banner";
import { TextInput } from "../components/input";
import { Alert } from "../components/alert";

const Home = () => {
  return (
    <>
      <HeadingHome />
      <TextInput />
      <Alert />
    </>
  );
};

export default Home;
