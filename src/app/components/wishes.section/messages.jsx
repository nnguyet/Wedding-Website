'use server';

import { Flex, Text } from '@chakra-ui/react'
import { Message } from './message'

export const Messages = async ({ limit=0, backgroundColor }) => {
    const mess = await fetch(`https://api.jsonstorage.net/v1/json/${process.env.JSON_DB_USER}/${process.env.JSON_DB_ITEM}?apiKey=${process.env.JSON_DB_API_KEY}`,
        { cache: 'no-store' }
    );

    if (!mess.ok) {
        return (
            <Flex
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                py={{base:'1em'}}
            >
                <Text
                    fontSize={{base:'1em', md:'1.25em'}}
                >
                    Xảy ra lỗi khi tải dữ liệu. Hãy thử lại sau nhé!
                </Text>
            </Flex>
        )
    }

    let data = await mess.json();
    // let data = [];
    if (limit != 0) {
        data = data.slice(-limit);
    }
    const n = data.length;
    
    return (
        <Flex
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            flexWrap={{base:'wrap'}}
            m={{base:'1.5em 0', md:'2em 0'}}
            backgroundColor={{base:backgroundColor}}
        >
            {
                n === 0 ? (
                    <Text
                        fontSize={{base:'1rem', xl:'1.125rem'}}
                        textAlign={{base:'center'}}
                        w={{base:'18rem', sm:'22rem', md:'100%'}}
                    >
                        Hãy là người đầu tiên để lại lời chúc cho ngày vui của Việt và Ngọc nhé!
                    </Text>
                ) : (
                    data.map((value, index) => {
                        return <Message key={index} {...data[n - 1 - index]} />
                    })
                )
            }
        </Flex>
    )    
}