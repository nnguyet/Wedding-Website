import { LocationMap, Invitation } from "./components"
import { Timebar } from "../components/"
import { Heading, Box, Text, Grid, GridItem, Button, Link, Image,Flex } from '@chakra-ui/react'

export default function Parties() {
    return (
        <Box
            bg={{base:'pink.light'}}
        >
            <Invitation />

            <Flex
                p={{base:'1em', md:'3em 0 0'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
            >
                <Image src="/images/card.png" alt='invitation-card'/>
            </Flex>

            <LocationMap />
            <Timebar />
        </Box>
    )
}