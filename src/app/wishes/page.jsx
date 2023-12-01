import { Image, Box, Text, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Center } from '@chakra-ui/react'
import { Form, Messages } from '../components/wishes.section';

export default function Wishes() {
    return (
        <Box
            m={{base:'-16px 0 12px', lg:'-60px 0 12px'}}
        >
            <Form />
            <Messages />
        </Box>
    );
}