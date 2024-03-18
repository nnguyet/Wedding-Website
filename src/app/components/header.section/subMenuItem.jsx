import { Flex, Text, Box, Link, Collapse } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link'
// import for icon
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const SubMenuItem = ({ content, last=false, subContent, href='/', path='/' }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            p={{base:'0.75em'}}
            textAlign={{base:'center'}}
            borderBottom={{base:last?'none':'1px solid'}}
            borderBottomColor={{base:'gray.default'}}
            w={{base:'70%'}}
        >
            <Flex
                position={{base:'relative'}}
                alignItems={{base:'center'}}
                justifyContent={{base:'center'}}
                onClick={onToggle}
                color={path.includes(href)?'brown.default':'black'}
            >
                <Text>
                    {content}
                </Text>

                <Box
                    position={{base:'absolute'}}
                    right={{base:'2%'}}
                    pt={{base:'0.1em'}}
                    visibility={isOpen?'hidden':'visible'}
                >
                    <FontAwesomeIcon icon={faAngleDown} />
                </Box>

                <Box
                    position={{base:'absolute'}}
                    right={{base:'2%'}}
                    pt={{base:'0.1em'}}
                    visibility={isOpen?'visible':'hidden'}
                >
                    <FontAwesomeIcon icon={faAngleUp} />
                </Box>

            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    mt={{base:'0.4em'}}
                    mx={{base:'auto'}}
                    w={{base:'10rem'}}
                >
                    {subContent.map((item, index) => {
                        return (
                            <Link
                                as={NextLink}
                                href={`${href}/${item.query}`}
                                key={index}
                                className='hover:no-underline'
                            >
                                <Text
                                    p={{base:'0.5em'}}
                                    color={path.includes(item.query)?'brown.default':'black'}
                                >
                                    {item.title}
                                </Text>
                            </Link>
                        )
                    })}
                </Box>
            </Collapse>
        </Box>
    )
}