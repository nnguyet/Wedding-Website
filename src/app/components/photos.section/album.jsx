import { Image, Text, Card, CardBody, Link, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Album = ({img, title, href='/photos', query='prewedding', shortTitle='none'}) => {    
    return (
        <Card
            w={{base:'80%', sm:'40%', md:'18%'}}
            m={{base:'12px auto'}}
            className='transition ease-in-out delay-50
                        hover:-translate-y-1 hover:scale-110 hover:opacity-90'
        >
            <Link as={NextLink} href={href + '/' + query} className='hover:no-underline'>
                <CardBody
                    p={{base:'8px 8px 2px'}}
                >
                    {
                        img === 'unknown' ? 
                        (<Flex
                            w={{base:'100%'}}
                            justifyContent={{base:'center'}}
                            alignItems={{base:'center'}}
                            fontSize={{base:'5rem'}}
                            bg={{base:'pink.default'}}
                            borderRadius={{base:'4px'}}
                            aspectRatio={{base:'3/2'}}
                        >
                            <Image
                                src='/images/coming-soon.gif'
                                alt='coming-soon'
                                w={{base:'55%'}}
                                objectFit={{base:'cover'}}
                            />
                        </Flex>)
                        : (<Image
                            src={img}
                            alt='alb'
                            maxW={{base:'100%'}}
                            fit={{base:'cover'}}
                            borderRadius={{base:'4px'}}
                        />)
                    }

                    <Text
                        fontSize={{base:'1.125rem', md:'1rem', lg:'1.125rem'}}
                        m={{base:'auto'}}
                        p={{base:'0.625rem 0'}}
                        textAlign={{base:'center'}}
                        fontWeight={{base:'600'}}
                    >
                        {shortTitle === 'none' ? title : shortTitle}
                    </Text>
                </CardBody>
            </Link>
        </Card>
    )
}