'use client';

import { Box,
        Card,
        CardBody,
        CardFooter,
        Text,
        Divider
    } from '@chakra-ui/react'
import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalBody,
        ModalFooter
    } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from '@chakra-ui/react'
import { Fragment } from 'react'

export const Message = ({ name = 'Unknown', message = `Happy Wedding!!!`}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const color = '#fce6ea'

    return (
        <Fragment>
            <Card
                w={{base:'40%', sm:'28%', md:'23%', lg:'22%', xl:'15%'}}
                backgroundColor={{base:color}}
                aspectRatio={{base:'1/1'}}
                m={{base:'16px 12px', md:'16px 8px', lg:'16px 12px', xl:'16px 20px'}}
                maxH={{base:'200px'}}
                minW={{base:'128px'}}
                onClick={onOpen}
                className='hover:animate-shake hover:cursor-pointer'
                borderRadius={{base:'0.6em'}}
            >
                <CardBody
                    p={{base:'12px 16px'}}
                    display={{base:'flex'}}
                    justifyContent={{base:'center'}}
                    alignItems={{base:'center'}}
                >
                    <Text
                        textAlign={{base:'center'}}
                        m={{base:'auto'}}
                        isTruncated={'true'}
                        noOfLines={{base:'4'}}
                        whiteSpace={{base:'pre-line'}}
                    >
                        {`${message}`}
                    </Text>
                </CardBody>
                <Divider w={{base:'80%'}} m={{base:'auto'}} color={{base:'gray'}}/>
                <CardFooter
                    justifyContent={{base:'space-between'}}
                    alignItems={{base:'center'}}
                    p={{base:'8px 8px 8px 12px', sm:'8px 20px'}}
                    display={{base:'flex'}}
                >
                    <Box></Box>
                        <Text
                            fontWeight={{base:'500'}}
                            isTruncated={'true'}
                            noOfLines={{base:'2'}}
                            textAlign={{base:'center'}}
                        >
                            {name}
                        </Text>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </CardFooter>
            </Card>


            <Modal isOpen={isOpen} onClose={onClose} isCentered
                scrollBehavior='inside'
            >
                <ModalOverlay />

                <ModalContent
                    backgroundColor={{base:color}}
                    minH={{base:'200px'}} 
                    maxW={{base:'75%', sm:'60%', md:'55%', lg:'35%'}}
                    maxH={{base:'80%', sm:'75%', md:'70%'}}
                    borderRadius={{base:'0.6em'}}
                >
                    <ModalBody
                        display={{base:'flex'}}
                        p={{base:'2px'}}
                        m={{base:'1.25rem 1.375rem 0.5rem', sm:'1.75rem 2rem 1rem'}}
                    >
                        <Text
                            textAlign={{base:'center'}}
                            m={{base:'auto'}}
                            whiteSpace={{base:'pre-line'}}
                        >
                            {`${message}`}
                        </Text>
                    </ModalBody>
                    <ModalFooter
                        display={{base:'flex'}}
                        justifyContent={{base:'space-between'}}
                        alignItems={{base:'center'}}
                    >
                        <Box></Box>
                        <Text
                            fontWeight={{base:'500'}}
                            isTruncated={'true'}
                            noOfLines={{base:'2'}}
                            textAlign={{base:'center'}}
                            mr={{base:'2px', sm:'4px'}}
                        >
                            {name}
                        </Text>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}