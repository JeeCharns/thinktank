import React from "react";
import { Input, Button, Flex, Spacer } from "@chakra-ui/react";
import "./input.css";

export function TextInput() {
  return (
    <div className="container">
      <div className="input-text">
        <Input
          placeholder="Write Your Problem Statement Here"
          size="md"
          variant="flushed"
          focusBorderColor="gray.200"
        />
      </div>
      <Flex className="button">
        <Spacer />
        <Button color="gray.700" variant="solid">
          Create ThinkTank
        </Button>
      </Flex>
      <div className="help">
        <Button size="small" variant="link" color="orange.300">
          I'm new here. What's this?
        </Button>
      </div>
    </div>
  );
}

export default TextInput;
