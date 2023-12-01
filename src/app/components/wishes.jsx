import { Flex, Box, Text, Link, Center } from '@chakra-ui/react'
import { Form, Messages } from './wishes.section'
import NextLink from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { promises as fs } from 'fs';

export const Wishes = async () => {
    // const data = await fs.readdir(process.cwd() + '/public/albums/le-ruoc-dau')
    // console.log(data)

    return (
        <Box
            m={{base:'48px 16px', md:'48px 24px'}}
        >
            <Form />
            <Messages
                limit={4}
                // backgroundColor={'#E3C5C1'}
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
                    >
                        Xem thêm những lời chúc khác ở đây nè...
                    </Text>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Link>
            </Center>
        </Box>
    )
}