import {
  Container,
  Text,
  Box,
  Spinner,
  Center,
  useToast,
  Image,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import SubmitAnswer from "../components/submit";
import { Sharelink } from "../components/share-link";
import { updateDoc } from "firebase/firestore";
import arrow from "../assets/arrow-down.svg";
import { AnswerCard } from "../components/answer-card";
import logo from "../assets/Logo.png";
import { useRef } from "react";

const VotePage = () => {
  const [thinktankDocRef, setThinktankDocRef] = useState(null);
  const [thinktankData, setThinktankData] = useState(null);
  const params = useParams();
  const [submit, setSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const loadThinkTank = async () => {
      setLoading(true);
      // we go to firebase and look for this documentId
      const docRef = db.collection("thinktanks").doc(params.id);
      const doc = await docRef.get({ source: "server" });
      setLoading(false);
      if (!doc.exists) {
        toast({ status: "error", title: "This thinktank does not exist" });
        navigate("/");
      } else {
        return docRef.onSnapshot((doc) => {
          setThinktankDocRef(docRef);
          setThinktankData(doc.data());
        });
      }
    };
    loadThinkTank();
  }, []);

  const handleSubmitResponse = async () => {
    if (!thinktankDocRef) return;
    setSubmitting(true);
    const existingResponses = thinktankData?.responses || [];
    await updateDoc(thinktankDocRef, {
      responses: [
        ...existingResponses,
        {
          response: submit,
          createdAt: new Date(),
          agree: 0,
          disagree: 0,
          abstain: 0,
        },
      ],
    }).then(() => {
      setSubmit("");
      setSubmitting(false);
      toast({
        status: "success",
        title: "Your response has been submitted",
      });
    });
  };

  const handleVote = async (response, vote) => {
    if (!thinktankDocRef) return;
    const existingResponses = thinktankData?.responses || [];
    const newResponses = existingResponses.map((existingResponse) => {
      if (existingResponse === response) {
        return {
          ...existingResponse,
          [vote]: (existingResponse?.[vote] || 0) + 1,
        };
      }
      return existingResponse;
    });
    await updateDoc(thinktankDocRef, {
      responses: newResponses,
      totalVotes: (thinktankData?.totalVotes || 0) + 1,
    });
  };

  return (
    <Container p={0} maxW="375px">
      <Box
        pt={10}
        display="flex"
        alignItems="center"
        flexDir="column"
        minH="100vh"
        justifyContent="space-between"
      >
        <Center flexDir="column" px={6}>
          <Sharelink />
          <Image
            src={logo}
            objectFit="cover"
            mt={6}
            alt="ThinkTank logo"
            onClick={() => navigate("/")}
          />
        </Center>
        {loading ? (
          <Center flex={1}>
            <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="gray.200"
              color="teal"
              size="lg"
            />
          </Center>
        ) : (
          <>
            <Box w="100%" px={8}>
              <Text textStyle="h1" color="gray.700" textAlign="center" mb={6}>
                {thinktankData?.question}
              </Text>
              <SubmitAnswer
                submit={submit}
                setSubmit={setSubmit}
                onClick={handleSubmitResponse}
                loading={submitting}
              />
            </Box>
            <Box w="100%" textAlign="center" pb={8}>
              <Box
                margin="0 auto"
                as="button"
                pb={4}
                onClick={() =>
                  scrollRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                aria-label="Scroll down to see responses"
              >
                <Image src={arrow} alt="Arrow pointing down" />
              </Box>
              <Divider mb={5} ref={scrollRef} />
              <Text textStyle="h1" color="gray.700">
                Responses
              </Text>
              <Text color="gray.400" mt={2} textStyle="b2">
                {thinktankData?.responses?.length} responses,{" "}
                {thinktankData?.totalVotes || 0} votes
              </Text>
            </Box>
          </>
        )}
      </Box>
      <Center flexDir="column" pb={8} w="100%" textAlign="center">
        <Divider />
        {thinktankData?.responses
          ?.sort((a, b) => {
            const totalVotesA =
              (a.agree || 0) + (a.disagree || 0) + (a.abstain || 0);
            const percentageA = (a.agree / totalVotesA) * 100;
            const totalVotesB =
              (b.agree || 0) + (b.disagree || 0) + (b.abstain || 0);
            const percentageB = (b.agree / totalVotesB) * 100;
            return percentageB - percentageA;
          })
          .map((response) => {
            const totalVotes =
              (response.agree || 0) +
              (response.disagree || 0) +
              (response.abstain || 0);
            return (
              <AnswerCard
                key={response.createdAt}
                agree={Math.round((response.agree / totalVotes) * 100)}
                disagree={Math.round((response.disagree / totalVotes) * 100)}
                response={response.response}
                onClick={(vote) => handleVote(response, vote)}
              />
            );
          })}
      </Center>
    </Container>
  );
};

export default VotePage;
