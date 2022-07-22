import React from 'react';
import { Center, Box, Text, Button, HStack } from '@chakra-ui/react';

export const Voting = () => {

return (
<Center>
<Box bgColor='gray.50' borderRadius='md' maxW={400} pt={3}>
   <Text textAlign='center'  color='gray.400' fontSize='xs'>0/1</Text> 
<Box p={10} borderBottom='1px' borderColor='gray.200' >
    <Text as='i' align="center" color='gray.700' fontSize='medium'> 
</Text>
</Box>
<Box>
<HStack>
        <Button w="300px" variant='ghost' bgColor='gray.50' color='orange.300'>Disagree</Button>
        <Button fontWeight="strong" w="300px" variant='ghost' bgColor='gray.50' color='gray.300'>Abstain</Button>
        <Button w="300px" variant='ghost' bgColor='gray.50' color='teal.300'>Agree</Button>   
    </HStack>
    </Box>
</Box>
</Center>
)}

export default Voting;