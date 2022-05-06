import React from 'react';
import { Text, Heading, Flex, Center, Box } from '@chakra-ui/react';


export function Results() {

    return (
<Center>
  <Box 
maxWidth={400}
p={3}
borderRadius='lg'
lineHeight='150%'
boxShadow='2xl'> 
<Heading align='center' mb={4} as='h4' size='md'>
    View 3 Results
</Heading>

    <Box>
  <Text justify='left' p={6} as='i'color='gray.700'>
    "Making more time for deep work by reducing meetings and encouraging async recordings for sharing updates"
  </Text>
  <Flex justify="right">
    <Text color='gray.700' fontSize='sm' mb={4}>
60% Disagree | 40%  Agree
</Text>
</Flex>
<Text justify='left' as='i'color='gray.700'>
“4 day work week so we can decompress after a hard week”
  </Text>
  <Flex justify="right">
    <Text color='gray.700' fontSize='sm' mb={4}>
30% Disagree | 70%  Agree
</Text>
</Flex>
<Text justify='left' as='i'color='gray.700'>
“A 6 hour workday would give us time around meetings to do deep work”
  </Text>
  <Flex justify="right">
    <Text mb={4}color='gray.700' fontSize='sm'>
50% Disagree | 50%  Agree
</Text>
</Flex>
</Box>
</Box> 



</Center>
 )
}

export default Results;