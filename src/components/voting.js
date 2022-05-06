import React from 'react';
import { Center, Box, Text, Button } from '@chakra-ui/react';

export function Voting() {

return (
<Center>
<Box bgColor='gray.50' borderRadius='md' maxW={400} pt={6}>
   <Text textAlign='center'  color='gray.400' fontSize='xs'>0/1</Text> 
<Box p={6} borderBottom='1px' borderColor='gray.200' >
    <Text as='i'  color='gray.700' fontSize='medium'> 
    “Making more time for deep work by reducing meetings encouraging async hiya recordings for sharing updates”
    </Text>
</Box>
<Box>
        <Button variant='ghost' bgColor='gray.50' color='orange.300'>Disagree</Button>
        <Button variant='ghost' bgColor='gray.50' color='gray.300'>Abstain</Button>
        <Button variant='ghost' bgColor='gray.50' color='teal.300'>Agree</Button>   
    </Box>
</Box>
</Center>

    )
}

export default Voting;