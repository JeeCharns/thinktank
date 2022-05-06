import React from "react";
import { TextInput } from '../components/input';
import { HeadingHome } from '../components/banner';
import { Alert } from '../components/alert';
import { Voting } from '../components/voting';
import { AllVotesSubmitted } from '../components/allVotesSubmitted';
import { Answer } from '../components/answer';
import { Results } from '../components/results';

function App() {
  return (
    <>
    <HeadingHome />
    <TextInput />
    <Results />
    </>
  )
}

export default App;
