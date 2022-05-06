import React from "react";
import { VStack, Text, Center } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';


export function AllVotesSubmitted() {
    
    return (
  <Center>
    <VStack
  spacing={3}
  align='center'
  bgColor='gray.50'
  p={4}
  maxWidth={400}
  borderRadius='md'
>
  <Text color='gray.400' fontSize='xs'>
    1/1
  </Text>
  <Text color='gray.700' fontSize='small' >
    You've voted on all the answers! Tap to refresh.
  </Text>
  <RepeatIcon />
</VStack>
</Center>
    

  
      
    )
}

export default AllVotesSubmitted;