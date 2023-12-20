import { Image, Box, Text, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Center } from '@chakra-ui/react'
import { Form, Messages } from '../components/wishes.section';

export default function Wishes() {
    return (
        <Box
            p={{base:'2em 0 1em'}}
            bg={'pink.light'}
        >
            <Form />
            <Messages />
        </Box>
    );
}