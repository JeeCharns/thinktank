import React from "react";
import { Button, useToast, useClipboard, Image } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import shareIcon from "../assets/share.svg";

export const Sharelink = () => {
  const { hasCopied, onCopy } = useClipboard(window.location.href);
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
    <Button
      size="sm"
      variant="outline"
      color="orange.300"
      leftIcon={
        hasCopied ? (
          <CheckIcon />
        ) : (
          <Image alt="Share icon" src={shareIcon} w="16px" />
        )
      }
      borderColor="orange.300"
      onClick={handleCopy}
      fontWeight="bold"
      w="70px"
      h="24px"
      px={2}
      fontSize="12px"
    >
      Share
    </Button>
  );
};
