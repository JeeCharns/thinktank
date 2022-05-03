import React from 'react';
import { Center, Box, Text, Button, ButtonGroup } from '@chakra-ui/react';

export function Voting() {

return (
    // not finished
<Center>
<Box bgColor="gray.50">
    <Text> 
        <ButtonGroup variant='ghost'> 
        <Button>Disagree</Button>
        <Button>Abstain</Button>
        <Button>Agree</Button> 
        </ButtonGroup>
    </Text>
</Box>
</Center>

    )
}

export default Voting;