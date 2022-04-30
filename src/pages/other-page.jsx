import { Button, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const OtherPage = () => {
  const history = useNavigate();

  return (
    <Container pt={100} display="flex" alignItems="center" flexDir="column">
      <Heading textAlign="center" mb={50}>
        You found the secret page!
      </Heading>
      <Image src="https://media.giphy.com/media/RJhuJzSw9dwgSTzwci/giphy.gif" />
      <Button onClick={() => history(-1)} mt={50}>
        I&apos;m scared, let's go back
      </Button>
    </Container>
  );
};
