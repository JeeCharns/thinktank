import React from "react";
import {
  Button,
  Spacer,
  Box,
  ListItem,
  UnorderedList,
  Text,
  Drawer,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ExplainerDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        borderTopRadius="24px"
        shadow="0px 0px 16px rgba(0, 0, 0, 0.15)"
      >
        <DrawerBody>
          <Text fontSize="lg" fontWeight="bold" px={0} mt={6} color="gray.700">
            Writing Your Problem Statement
          </Text>
          <Box mt={4} p={0} color="gray.600">
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
              To get the most out of ThinkTank, run your session with large
              groups of people at the same time.
            </Text>
          </Box>
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

ExplainerDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
