import React from "react";
import {
    Input,
    Button,
    Stack,
    Flex, 
    Box, 
    Spacer,
    Center
  } from "@chakra-ui/react";

 export function TextInput() {
    
    return (
    <Center>
       <Box p="8" w="60%" >
          <Input placeholder='Write Your Problem Statement Here' size='md' variant='flushed' focusBorderColor='gray.200'/>
        <Flex> 
          <Spacer />
        <Button mt="8px" bgColor="gray.700" color="white" variant='solid'>
         Create Think Tank
          </Button>                     
        </Flex>
  </Box>
        </Center>
      

    )
  }

export default TextInput;