import { LocationMap, Invitation } from "./components"
import { Heading, Box, Text, Grid, GridItem, Button, Link } from '@chakra-ui/react'

export default function Parties() {
    return (
        <Box>
            <Invitation />
            <LocationMap />
        </Box>
    )
}