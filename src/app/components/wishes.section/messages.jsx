'use server';

import { Flex, Box, Card, CardBody, CardFooter, Text, Divider } from '@chakra-ui/react'
import { Message } from './message'

export const Messages = async ({ limit=0, backgroundColor }) => {
    const mess = await fetch(`https://api.jsonstorage.net/v1/json/${process.env.JSON_DB_USER}/${process.env.JSON_DB_ITEM}?apiKey=${process.env.JSON_DB_API_KEY}`,
        { cache: 'no-store' }
    );

    if (!mess.ok) {
        throw new Error('Failed to fetch data');
    }

    let data = await mess.json();
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
                    <Text>
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