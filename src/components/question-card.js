import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import arrow from "../assets/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import { getPlural } from "../helpers/utils.js";

dayjs.extend(advancedFormat);

export const QuestionCard = ({ id, question, date, participants, votes }) => {
  const navigate = useNavigate();

  return (
    <Box
      textStyle="b2"
      w="100%"
      my={8}
      as="button"
      onClick={() => navigate(`/${id}`)}
      maxW="320px"
      textAlign="left"
      aria-label="Navigate to question"
    >
      <Text color="gray.400">{dayjs(date).format("Do MMM	YYYY")}</Text>
      <Flex justifyContent="space-between" alignItems="center" my={2}>
        <Text color="gray.700">{question}</Text>
        <Image src={arrow} alt="ThinkTank logo" />
      </Flex>
      <Text color="gray.400">
        {participants} participant{getPlural(participants)}, {votes} vote
        {getPlural(participants)}
      </Text>
    </Box>
  );
};

QuestionCard.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  date: PropTypes.any,
  participants: PropTypes.number,
  votes: PropTypes.number,
};
