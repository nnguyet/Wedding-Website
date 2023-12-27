import { Box, Text, Flex, Image, Show, Hide } from '@chakra-ui/react'
// import { Handlee } from 'next/font/google'

// const handlee = Handlee({
//     weight: '400',
//     subsets: ['latin'],
// });

export const Gallery = () => {
    return (
        <Flex
            bg={'pink.light'}
            w={'100%'}
            p={{base:'1em 0.25em 1.5em', md:'0 0.5em 2em', lg:'0 2% 2em', xl:'0 4em 2em', '2xl':'0 calc(5em + (100% - 90em) / 2) 2em'}}
            justifyContent={{base:'space-around', sm:'center', lg:'space-around'}}
            alignItems={'center'}
            fontSize={{base:'16px'}}
        >
            <Show above='md'>
                <Flex>
                    <Box>
                        <Image
                            src='/gallery/img9.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'8.5em', xl:'11em'}}
                            mb={{md:'0.25em'}}
                            objectFit={'cover'}
                        />
                        <Image
                            src='/gallery/img8.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'8.5em', xl:'11em'}}
                            h={{lg:'12.5em', xl:'15.5em'}}
                            objectFit={'cover'}
                        />
                    </Box>

                    <Box
                        ml={{md:'0.25em'}}
                    >
                        <Image
                            src='/gallery/img7.jpg'
                            alt='image'
                            w={{md:'10.5em', lg:'13em', xl:'16.25em'}}
                            objectFit={'cover'}
                            mb={{md:'0.25em'}}
                        />
                        <Flex>
                            <Image
                                src='/gallery/img5.jpg'
                                alt='image'
                                w={{md:'5.125em', lg:'6.375em', xl:'8em'}}
                                mr={{md:'0.25em'}}
                                objectFit={'cover'}
                            />
                            <Image
                                src='/gallery/img6.jpg'
                                alt='image'
                                w={{md:'5.125em', lg:'6.375em', xl:'8em'}}
                                objectFit={'cover'}
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Show>

            <Hide above='md'>
                <Flex
                    w={{base:'55%', sm:'50%'}}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                    mr={{base:'2%'}}
                >
                    <Flex
                        w={{base:'100%'}}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Image
                            src='/gallery/img5.jpg'
                            alt='img'
                            w={{base:'48%', sm:'7em'}}
                            objectFit={'cover'}
                            mr={{base:'0.25em'}}
                            aspectRatio={1/1}
                        />
                        <Image
                            src='/gallery/img6.jpg'
                            alt='img'
                            w={{base:'48%', sm:'7em'}}
                            objectFit={'cover'}
                            aspectRatio={1/1}
                        />
                    </Flex>
                    <Image
                            src='/gallery/img9.jpg'
                            alt='img'
                            w={{base:'calc(96% + 0.25em)', sm:'14.25em'}}
                            objectFit={'cover'}
                            mt={{base:'0.25em'}}
                        />
                </Flex>
            </Hide>

            <Text
                textAlign={{base:'center'}}
                // fontStyle={{base:'italic'}}
                fontSize={{ base: "0.75em", sm:'1em', md:'0.875em', lg:'1.1875em'}}
                lineHeight={{ base: "2em", sm:'2.5em', md: "2em", lg:'2.25em' }}
                mx={{base:'0', md:'calc(0.65em + min((100% - 47rem) / 2, 4em))', lg:'0', xl:'0.5em'}}
                // className={handlee.className}
            >
                You{'\''}re my serendipity
                <br />
                I wasn{'\''}t looking for you
                <br />
                I wasn{'\''}t expecting you
                <br />
                But I{'\''}m very lucky I met you.
            </Text>

            <Show above='md'>
                <Flex>
                    <Box
                        mr={{md:'0.25em'}}
                    >
                        <Flex>
                            <Image
                                src='/gallery/img5.jpg'
                                alt='image'
                                w={{md:'5.125em', lg:'6.375em', xl:'8em'}}
                                mr={{md:'0.25em'}}
                                objectFit={'cover'}
                            />
                            <Image
                                src='/gallery/img6.jpg'
                                alt='image'
                                w={{md:'5.125em', lg:'6.375em', xl:'8em'}}
                                objectFit={'cover'}
                            />
                        </Flex>                    
                        <Image
                            src='/gallery/img7.jpg'
                            alt='image'
                            w={{md:'10.5em', lg:'13em', xl:'16.25em'}}
                            objectFit={'cover'}
                            mt={{md:'0.25em'}}
                        />
                    </Box>
                    
                    <Box>
                        <Image
                            src='/gallery/img8.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'8.5em', xl:'11em'}}
                            h={{lg:'12.5em', xl:'15.5em'}}
                            objectFit={'cover'}
                        />
                        <Image
                            src='/gallery/img9.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'8.5em', xl:'11em'}}
                            mt={{md:'0.25em'}}
                            objectFit={'cover'}
                        />
                    </Box>
                </Flex>
            </Show>
            
        </Flex>
    )
}