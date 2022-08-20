import React from "react";
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
import PropTypes from 'prop-types';

const MAX_ALLOWED_CHARACTERS = 100;

export const TextInput = ({ question, setQuestion, onClick }) => {
  const toast = useToast();
  const handleChange = (e) => {
    // We only update our state if the number of characters doesn't exceed the max allowed
    if (e.target.value.length <= MAX_ALLOWED_CHARACTERS) {
      setQuestion(e.target.value);
    } else {
      // If it exceeds, we could send a toast to inform the user of this
      toast({
        title: "Maximum length exceeded",
        description: "Let's keep these questions punchy!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Center>
      <Box pt={10} w="50%">
        <Input
          placeholder="Write Your Problem Statement Here"
          size="md"
          variant="flushed"
          focusBorderColor="gray.600"
          isDisabled={question.length > MAX_ALLOWED_CHARACTERS +1}
          onChange={handleChange}
          value={question}
        />
        <Text color='gray.300' fontSize='sm' mt="8px">{question.length} / 100</Text>
        <Flex>
          <Spacer />
          <Button
            bgColor="gray.700"
            color="white"
            variant="solid"
            onClick={onClick}
            isDisabled={!question.length}
            >
            Create Think Tank
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  question: PropTypes.string,
  setQuestion: PropTypes.string,
  onClick: PropTypes.any,
};

export default TextInput;