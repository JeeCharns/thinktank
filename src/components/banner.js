import React from "react";
import { Heading, Text } from '@chakra-ui/react';
import './banner.css'


export function HeadingHome() {
    return (
        <div className="container">
        <Heading as='i' size='4xl' >
            ThinkTank
        </Heading>
        </div>
     )
}

export default HeadingHome;