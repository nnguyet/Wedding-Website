import { Box, Text, Link, Center } from '@chakra-ui/react'
import { Form, Messages } from './wishes.section'
import NextLink from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Wishes = async () => {
    return (
        <Box
            p={{base:'2em 1em', md:'2em 1.5em'}}
            bg={'pink.light'}
        >
            <Form />
            <Messages
                limit={4}
            />
            <Center>
                <Link
                    as={NextLink}
                    href={'/wishes'}
                    className='transition ease-in-out hover:no-underline hover:font-bold hover:scale-110'
                    display={{base:'flex'}}
                    flexDir={{base:'column', md:'row'}}
                    alignItems={{base:'center'}}
                    justifyContent={{base:'center'}}
                >
                    <Text
                        w={{base:'75%', sm:'100%'}}
                        textAlign={{base:'center'}}
                        m={{base:'0 0 8px', sm:'4px 0 8px', md:'0 8px'}}
                        fontSize={{base:'1.0625em', md:'1.125em'}}
                    >
                        Xem thêm những lời chúc khác ở đây nè...
                    </Text>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Link>
            </Center>
        </Box>
    )
}