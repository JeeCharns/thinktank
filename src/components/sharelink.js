import React from "react";
import { Button, useToast, useClipboard, Box, Center, VStack } from "@chakra-ui/react";

import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

export function Sharelink() {
  const { hasCopied, onCopy } = useClipboard();
  const toast = useToast();

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
    <Box>
      <Center>
        <VStack paddingTop={5} spacing={4} maxWidth={400}>
          <Button
            size="sm"
            variant="outline"
            color="orange.300"
            leftIcon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            borderColor="orange.300"
            onClick={handleCopy}
          >
Share          </Button>
        </VStack>
      </Center>
    </Box>
  );
}

export default Sharelink;
