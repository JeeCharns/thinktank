import React from "react";
import { Button, useToast, useClipboard, Box, Center, VStack } from "@chakra-ui/react";

import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

export function Copylink() {
  const { hasCopied, onCopy } = useClipboard();
  
  const toast = useToast();
  const location = useParams();
  console.log(location)

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Link copied to clipboard",
      description: "Share with everyone!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box h="60%">
      <Center>
        <VStack paddingTop={10} spacing={4} maxWidth={400}>
          <Button
            size="md"
            variant="outline"
            color="orange.300"
            leftIcon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            borderColor="orange.300"
            onClick={handleCopy}
          >
            Copy link to clipboard.
          </Button>
        </VStack>
        <Box pos="fixed" bottom="25%">
          <Button bgColor="gray.700" color="white" variant="solid" size="lg">
            Continue
          </Button>
        </Box>
      </Center>
    </Box>
  );
}

export default Copylink;
