import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Spacer,
  useDisclosure,
  Center,
  Box,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export function Alert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Center>
        <Box position="absolute" bottom="0">
          <Button
            size="md"
            fontweight="bold"
            variant="link"
            onClick={onOpen}
            color="orange.300"
          >
            I'm new here. What's this?
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            motionPreset="slideInBottom"
            boxshadow="lg"
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Writing Your Problem Statement
                </AlertDialogHeader>

                <AlertDialogBody>
                  ThinkTank crowdsources a democratic answer to any problem.
                  Simply invite people to put forward solutions and vote to find
                  consensus. For example:
                  <UnorderedList>
                    <ListItem>Why is [problem] happening?</ListItem>
                    <ListItem> How might we [problem]?</ListItem>
                    <ListItem>How do we feel about [problem]?</ListItem>
                    <ListItem> What’s the best flavour of ice cream?</ListItem>
                  </UnorderedList>
                  To get the most out of ThinkTank, run your session with large
                  groups of people at the same time.
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
                    >
                      Great, thanks!
                    </Button>
                  </Box>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>
      </Center>
    </>
  );
}

export default Alert;
