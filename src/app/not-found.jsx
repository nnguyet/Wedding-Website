
import { Heading, Center, Flex, Button, Text, Show, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function NotFound() {
    return (
        <Flex
            flexDir={{base:'column'}}
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            py={{base:'2em', md:'4em'}}
        >
            <Text
                fontWeight={{base:'700'}}
                fontSize={{base:'4em', md:'8em'}}
                lineHeight={{base:'1em', md:'1.375em'}}
            >
                404
            </Text>
            <Text
                fontSize={{base:'1.5em', md:'2em'}}
            >
                Không tìm thấy trang này :{'('}
            </Text>
            <Button
                mt={{base:'1.5em', md:'2.5em'}}
                borderRadius={{base:'2em'}}
                w={{base:'12em', md:'12em'}}
                fontSize={{base:'1em', md:'1.25em'}}
                fontWeight={{base:'500'}}
                bg={'btn.dark'}
                color={'white'}
                _hover={{
                    bg:'pink.dark',
                }}
            >
                <Link
                    as={NextLink}
                    href='/'
                    _hover={{
                        textDecoration:'none',
                    }}
                >
                    Về trang chủ
                </Link>
            </Button>
        </Flex>
    );
};
