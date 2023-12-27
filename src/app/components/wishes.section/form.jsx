'use client';

import { Flex, Input, Heading, Center, Text, Textarea, IconButton, useToast } from '@chakra-ui/react'
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
            <Text
                className='font-corinthia'
                fontSize={{base:'1.5em', sm:'1.75em', md:'4rem'}}
            >
                Đôi lời nhắn gửi...
            </Text>

            <Text
                fontStyle={{base:'italic'}}
                textAlign={{base:'center'}}
                mt={{xl:'-0.25em'}}
            >
                Thật vui khi được trải qua ngày ý nghĩa như vậy với những người thân yêu.
                <br />
                Việt & Ngọc sẽ vui thêm nhiều chút nữa khi nhận được những lời chúc phúc từ mọi người!!!

            </Text>

            <Flex
                flexDir={{base:'column', md:'row'}}
                w={{base:'100%'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                m={{base:'4px auto', md:'1em auto 0'}}
            >
                <Text
                    textAlign={{base:'center'}}
                    m={{base:'8px auto 10px', md:'16px'}}
                >
                    Cho chúng mình biết tên của bạn:
                </Text>
                <Input
                    placeholder='Tên của bạn'
                    w={{base:'75%', sm:'20em', md:'30%'}}
                    maxW={{md:'16em', lg:'20em'}}
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
                Lời chúc gửi đến chúng mình:
            </Text>

            <Textarea
                placeholder='Lời vàng ý ngọc'
                w={{base:'90%', sm:'24em', md:'60%'}}
                maxW={{md:'30em', lg:'35em'}}
                h={{base:'11em'}}
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