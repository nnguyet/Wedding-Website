import { Image, Flex, Button, Text, Box, Center, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
// import for icon
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const MenuItem = ({ content, last=false, href='/', path }) => {
    return (
        <Box
            p={{base:'0.75em'}}
            textAlign={{base:'center'}}
            borderBottom={{base:last?'none':'1px solid'}}
            borderBottomColor={{base:'gray.default'}}
            w={{base:'70%'}}
        >
            <Link as={NextLink} href={href} className='hover:no-underline'>
                <Text textColor={path===href?'brown.default':'black'} >
                    {content}
                </Text>
            </Link>
        </Box>
    )
}