import React from "react";
import {
    Input,
    Button,
    Stack,
    Flex, 
    Box, 
    Spacer
  } from "@chakra-ui/react";
import './input.css';
import { initializeApp } from "firebase/app";

const firebase = require('firebase');
const uuid = require('uuid');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMa8j_XY_SLeLk7ADaU4ynrmvL8DsAyUo",
  authDomain: "thinktank-33b46.firebaseapp.com",
  databaseURL: "https://thinktank-33b46-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thinktank-33b46",
  storageBucket: "thinktank-33b46.appspot.com",
  messagingSenderId: "508424049998",
  appId: "1:508424049998:web:7cdea1666bb4211f0f3a1f",
  measurementId: "G-13W13E77CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export function TextInput() {
    
    return (
        <div className="container">
          <div className="input-text">
           <Input placeholder='Write Your Problem Statement Here' size='md' variant='flushed' focusBorderColor='gray.200'/>
          </div>
        <Flex className="button">
          <Spacer />
        <Button color='gray.700' variant='solid'>
         Create ThinkTank
          </Button>                     
        </Flex>
        <div className="help">
        <Button size='small' variant='link' color='orange.300' >
    I'm new here. What's this?
  </Button>
        </div>

        </div>
      

    )
  }

export default TextInput;