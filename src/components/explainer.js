import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  Button,
  Spacer,
  Box,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Explainer = ({ isOpen, onClose }) => {
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="slideInBottom"
      boxshadow="lg"
      isCentered
    >
      <AlertDialogContent p={6} color="gray.600">
        <AlertDialogHeader
          fontSize="lg"
          fontWeight="bold"
          px={0}
          color="gray.700"
        >
          Writing Your Problem Statement
        </AlertDialogHeader>

        <AlertDialogBody mt={4} p={0}>
          <Text>
            ThinkTank crowdsources a democratic answer to any problem. Simply
            invite people to put forward solutions and vote to find consensus.
          </Text>
          <Text mt={6}>For example:</Text>
          <UnorderedList>
            <ListItem>Why is [problem] happening?</ListItem>
            <ListItem> How might we [problem]?</ListItem>
            <ListItem>How do we feel about [problem]?</ListItem>
            <ListItem> What’s the best flavour of ice cream?</ListItem>
          </UnorderedList>
          <Text mt={4}>
            To get the most out of ThinkTank, run your session with large groups
            of people at the same time.
          </Text>
        </AlertDialogBody>

        <AlertDialogFooter>
          <Box h="200">
            <Spacer />
            <Button
              bgColor="gray.700"
              color="white"
              onClick={onClose}
              pos="absolute"
              bottom="10"
              right="10"
              aria-label="Close explanation"
            >
              Great, thanks!
            </Button>
          </Box>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

Explainer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
