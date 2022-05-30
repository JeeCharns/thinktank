import React from "react";
import { Center, Box, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";

export function HeadingHome() {
  return (
    <Center>
      <Box pb={10} w="60%" justifyContent="center" align="center">
        <Image src={logo} boxSize="50%" objectFit="cover" />
      </Box>
    </Center>
  );
}

export default HeadingHome;
