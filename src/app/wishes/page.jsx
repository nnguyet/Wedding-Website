import { Box } from '@chakra-ui/react'
import { Form, Messages } from '../components/wishes.section';
import { Qrcode } from '../components';

export default function Wishes() {
    return (
        <Box
            p={{base:'2em 0 0'}}
            bg={'pink.light'}
        >
            <Form />
            <Messages />
            <Qrcode />
        </Box>
    );
}