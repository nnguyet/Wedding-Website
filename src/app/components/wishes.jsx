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
            p={{base:'1em 1em', md:'1rem 1.5em 2rem'}}
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
                        w={{base:'100%'}}
                        textAlign={{base:'center'}}
                        m={{base:'0 0 8px', sm:'4px 0 8px', md:'0 8px'}}
                        fontSize={{base:'1.0625em', sm:'1rem', md:'1.125em'}}
                    >
                        Bấm để xem thêm những lời chúc khác ...
                    </Text>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Link>
            </Center>
        </Box>
    )
}