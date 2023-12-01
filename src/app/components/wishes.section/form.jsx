'use client';

import { Flex, Box, Input, Heading, Center, Text, Textarea, Button, IconButton, useToast } from '@chakra-ui/react'
import { useState, useRef } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation"

export const Form = () => {
    const router = useRouter();

    let [message, setMessage] = useState('');
    const handleMessageInput = (e) => {
        let val = e.target.value;
        setMessage(val);
    }
    const nameInputRef = useRef();

    let [name, setName] = useState('');
    const handleNameInput = (e) => {
        let val = e.target.value;
        setName(val);
    }
    const messageInputRef = useRef();

    let [submitting, setSubmitting] = useState(false);

    const toast = useToast();

    const handleClick = async (e) => {
        const data = { name:name.trim(), message:message.trim() };
        if (data.name === '') {
            nameInputRef.current.focus();
            return toast({
                title: 'Không có tên',
                description: `Bạn chưa điền tên của mình kìa!`,
                status:'warning',
                duration: 4000,
                isClosable: true,
            })
        }
        if (data.message === '') {
            messageInputRef.current.focus();
            return toast({
                title: 'Không có lời chúc',
                description: `Hãy để lại lời chúc của bạn dành cho tụi mình nhé!`,
                status:'warning',
                duration: 4000,
                isClosable: true,
            })
        }
        
        setSubmitting(true);
        try {
            const res = await fetch('/data/message', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            })
            if (res.status > 199 && res.status < 300) {
                setName('');
                setMessage('');
                router.refresh();
                return toast({
                    title: 'Thành công',
                    description: `Việt và Ngọc đã nhận được lời chúc của bạn rồi. Cảm ơn bạn nhé!`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
            }
            else {
                throw res;
            }
        }
        catch (error) {
            console.log(error);
            return toast({
                title: 'Thất bại',
                description: `Có lỗi xảy ra nên lời chúc của bạn chưa được lưu. Hãy thử lại nhé!`,
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        finally {
            setSubmitting(false);
        }
    }

    return (
        <Center
            flexDir={{base:'column'}}
        >
            <Heading
                as='h2'
            >
                Đôi lời nhắn gửi
            </Heading>

            <Text
                fontStyle={{base:'italic'}}
            >
                Tâm sự...
            </Text>

            <Flex
                flexDir={{base:'column', md:'row'}}
                w={{base:'100%'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                m={{base:'4px auto', md:'8px'}}
            >
                <Text
                    textAlign={{base:'center'}}
                    m={{base:'8px auto 10px', md:'16px'}}
                >
                    Cho tụi mình biết tên của bạn:
                </Text>
                <Input
                    placeholder='Tên của bạn'
                    w={{base:'75%', sm:'50%', md:'30%'}}
                    value={name}
                    onChange={handleNameInput}
                    ref={nameInputRef}
                    disabled={submitting}
                />
            </Flex>

            <Text
                m={{base:'16px auto 10px'}}
                textAlign={{base:'center'}}
            >
                Để lại lời chúc của bạn cho tụi mình nhé!
            </Text>

            <Textarea
                placeholder='Lời chúc của bạn'
                w={{base:'90%', sm:'70%', md:'60%'}}
                h={{base:'176px', sm:'200px', md:'176px'}}
                resize={{base:'none'}}
                value={message}
                onChange={handleMessageInput}
                ref={messageInputRef}
                disabled={submitting}
            />
            <IconButton
                m={{base:'6px'}}
                variant={{base:'solid'}}
                icon={<FontAwesomeIcon icon={faPaperPlane}/>}
                onClick={handleClick}
                isLoading={submitting}
            />
        </Center>
    )
}