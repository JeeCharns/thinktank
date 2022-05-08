import React, { useState } from "react";
import {
  Input,
  Button,
  Flex,
  Box,
  Spacer,
  Center,
  Text,
  useToast,
} from "@chakra-ui/react";

const MAX_ALLOWED_CHARACTERS = 100;

export const TextInput = () => {
  const [input, setInput] = useState("");

  const toast = useToast();

  const handleChange = (e) => {
    // We only update our state if the number of characters doesn't exceed the max allowed
    if (e.target.value.length <= MAX_ALLOWED_CHARACTERS) {
      setInput(e.target.value);
    } else {
      // If it exceeds, we could send a toast to inform the user of this 
      toast({
        title: "Maximum length exceeded",
        description: "Let's keep these questions punchy!",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Center>
      <Box p="8" w="60%">
        <Input
          placeholder="Write Your Problem Statement Here"
          size="md"
          variant="flushed"
          focusBorderColor="gray.200"
          disabled={input.length > MAX_ALLOWED_CHARACTERS}
          onChange={handleChange}
          value={input}
        />
        {/* Please style me I am uglyyy */}
        <Text>{input.length} / 100</Text>
        <Flex>
          <Spacer />
          <Button mt="8px" bgColor="gray.700" color="white" variant="solid">
            Create Think Tank
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};
