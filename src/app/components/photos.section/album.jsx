import { Image, Box, Heading, Center, Text, Flex, Card, CardBody, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Album = ({img, title, href='/photos', query='prewedding'}) => {    
    return (
        <Card
            w={{base:'80%', sm:'40%', md:'20%'}}
            m={{base:'12px auto'}}
            className='transition ease-in-out delay-50
                        hover:-translate-y-1 hover:scale-110 hover:opacity-90'
        >
            <Link as={NextLink} href={href + '/' + query} className='hover:no-underline'>
                <CardBody
                    p={{base:'8px 8px 2px'}}
                >
                    <Image
                        src={img}
                        alt='alb'
                        maxW={{base:'100%'}}
                        fit={{base:'cover'}}
                        borderRadius={{base:'4px'}}
                    />

                    <Heading
                        size={{base:'md', sm:'sm'}}
                        m={{base:'12px 0'}}
                        textAlign={{base:'center'}}
                    >
                        {title}
                    </Heading>
                </CardBody>
            </Link>
        </Card>
    )
}