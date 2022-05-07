import React from 'react';
import { Text, Flex, Center, Box } from '@chakra-ui/react';


export function Answer() {

    return (
<Center>
    <Box maxWidth={400}
 p={3}
bgColor='gray.50'
borderRadius='md'
textAlign='left'
lineHeight='150%'
>
  <Text justify='left' p={6} as='i'color='gray.700'>
    "Making more time for deep work by reducing meetings and encouraging async recordings for sharing updates"
  </Text>
  <Flex justify="right">
    <Text color='gray.700' fontSize='sm'>
60% Disagree | 40%  Agree
</Text>
</Flex>
</Box>
</Center>
 )
}

export default Answer;