'use client';

import { Box,
        Card,
        CardBody,
        CardFooter,
        Text,
        Divider,
        Button
    } from '@chakra-ui/react'
import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalCloseButton,
        ModalBody,
        ModalFooter
    } from '@chakra-ui/react'
import { Form } from './form'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'

export const Message = ({ name = 'Unknown', message = `Happy Wedding!!!`}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const color = '#fce6ea'

    return (
        <React.Fragment>
            <Card
                w={{base:'40%', sm:'28%', md:'23%', lg:'22%', xl:'15%'}}
                backgroundColor={{base:color}}
                aspectRatio={{base:'1/1'}}
                m={{base:'16px 12px', md:'16px 8px', lg:'16px 12px', xl:'16px 20px'}}
                maxH={{base:'200px'}}
                minW={{base:'128px'}}
                onClick={onOpen}
                className='hover:animate-shake hover:cursor-pointer'
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
                    >
                        {message}
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
                >
            

                <ModalBody
                    display={{base:'flex'}}
                    p={{base:'2px'}}
                    m={{base:'20px 22px 8px', sm:'28px 32px 16px'}}
                >
                    <Text
                        textAlign={{base:'center'}}
                        m={{base:'auto'}}
                    >
                        {message}
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
        </React.Fragment>
    )
}