import React from "react";
import HeadingHome from "../components/banner";
import TextInput from "../components/input";
import { Results } from '../components/results';


export const Home = () => {
  return (
    <>
      <HeadingHome />
      <TextInput />
      <Results />
    </>
  );
};
