'use client';

import { Image, Flex, Button, Text, Box, Center } from '@chakra-ui/react'
import { MenuItem } from './menuItem';
import { albumList } from '../albumList';
import { SubMenuItem } from './subMenuItem';
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react';
// import for icon
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
// import for modal
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

export const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const path = usePathname();
    
    // const { route } = useRouter();
    // useEffect(() => {
    //     onClose();
    // }, [route]);

    return (
        <Button
            position={{base:'absolute'}}
            top={{base:'0.75em', sm:'1.25em'}}
            right={{base:'0.5em', sm:'1.5em'}}
            className='hover:bg-transparent'
            color={{base:'brown.default'}}
            display={{md:'none'}}
            onClick={onOpen}
        >
            <FontAwesomeIcon icon={faBars} size='lg'/>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size='full'
                motionPreset='slideInRight'
                scrollBehavior='inside'
            >
                <ModalContent
                    bg={{base:'pink.default'}}
                >
                    <ModalHeader>
                        <Button
                            onClick={onClose}
                            className='hover:bg-transparent'
                            position={{base:'absolute'}}
                            top={{base:'0.75em', sm:'1.25em'}}
                            right={{base:'0.5em', sm:'1.5em'}}
                            color={{base:'brown.default'}}
                        >
                            <FontAwesomeIcon icon={faXmark} size='lg'/>
                        </Button>
                    </ModalHeader>
                    <ModalBody
                        display={{base:'flex'}}
                        flexDir={{base:'column'}}
                        alignItems={{base:'center'}}
                        mt={{base:'0.5em'}}
                        fontSize={{base:'1.2em', sm:'1.5em'}}
                    >
                        <MenuItem content='Trang Chủ' path={path}/>
                        <MenuItem content='Lễ Cưới' href='/parties' path={path}/>
                        <SubMenuItem content='Hình Ảnh' subContent={albumList} href='/photos' path={path} />
                        <MenuItem content='Mừng Cưới' last={true} href='/wishes' path={path} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Button>
    )
}