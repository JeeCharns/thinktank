import React, { useState } from "react";
import { Text, Flex, Box, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const AnswerCard = ({ onClick, response, agree, disagree }) => {
  const [answered, setAnswered] = useState(false);

  const submitAnswer = (answer) => {
    setAnswered(true);
    onClick(answer);
  };

  return (
    <Box py={10} px={6} lineHeight="150%" w="100%">
      <Text color="gray.700" textStyle="b1" textAlign="left" fontStyle="italic">
        &quot;{response}&quot;
      </Text>
      {answered ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={6}
          py={3}
          mt={4}
          fontWeight="500"
        >
          <Text color="orange.300" textStyle="b2">
            {disagree}% Disagree
          </Text>
          <Text color="teal.300" textStyle="b2">
            {agree}% Agree
          </Text>
        </Flex>
      ) : (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap="2px"
          mt={4}
        >
          <Button
            bgColor="gray.50"
            h="45px"
            onClick={() => submitAnswer("disagree")}
            color="orange.300"
            flex={1}
            aria-label="Disagree"
          >
            Disagree
          </Button>
          <Button
            bgColor="gray.50"
            h="45px"
            onClick={() => submitAnswer("abstain")}
            color="gray.300"
            flex={1}
            aria-label="Abstain"
          >
            Abstain
          </Button>
          <Button
            bgColor="gray.50"
            h="45px"
            onClick={() => submitAnswer("agree")}
            color="teal.300"
            flex={1}
            aria-label="Agree"
          >
            Agree
          </Button>
        </Flex>
      )}
    </Box>
  );
};

AnswerCard.propTypes = {
  onClick: PropTypes.func,
  response: PropTypes.string,
  agree: PropTypes.number,
  disagree: PropTypes.number,
};
