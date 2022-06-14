/* eslint-disable react/prop-types */
import React from "react";
import {
  Input,
  Button,
  Flex,
  Box,
  Spacer,
  Center,
  Text,
  useToast
} from "@chakra-ui/react";

const MAX_ALLOWED_CHARACTERS = 100;

export const SubmitAnswer = ({ submit, setSubmit, onClick }) => {
  const toast = useToast();
  const handleChange = (e) => {
    // We only update our state if the number of characters doesn't exceed the max allowed
    if (e.target.value.length <= MAX_ALLOWED_CHARACTERS) {
      setSubmit(e.target.value);
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
      <Box w="40%">
        <Input
          placeholder="Submit Your Answer"
          size="md"
          variant="flushed"
          focusBorderColor="gray.600"
          isDisabled={submit.length > MAX_ALLOWED_CHARACTERS +1}
          onChange={handleChange}
          value={submit} />
          <Text color='gray.300' fontSize='sm' mt="8px">{submit.length} / 100</Text>
        <Flex>
          <Spacer />
          <Button
            bgColor="gray.700"
            color="white"
            variant="solid"
            onClick={onClick}
            isDisabled={!submit.length}
            >
Submit          </Button>
        </Flex>
</Box>
</Center>
  )}

export default SubmitAnswer;