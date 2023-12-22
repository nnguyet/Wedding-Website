import { Box, Text, Flex, Image, Show, Hide } from '@chakra-ui/react'

export const Gallery = () => {
    return (
        <Flex
            bg={'pink.light'}
            w={'100%'}
            p={{base:'1em 0.25em 1.5em', md:'0 0.5em 2em', lg:'0 4em 2em'}}
            justifyContent={{base:'space-around', sm:'center', md:'space-around'}}
            alignItems={'center'}
            fontSize={{base:'16px'}}
        >
            <Show above='md'>
                <Flex>
                    <Box>
                    <Image
                            src='/gallery/img9.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'11em'}}
                            mb={{md:'0.25em'}}
                            objectFit={'cover'}
                        />
                        <Image
                            src='/gallery/img8.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'11em'}}
                            h={{lg:'15.5em'}}
                            objectFit={'cover'}
                        />
                    </Box>

                    <Box
                        ml={{md:'0.25em'}}
                    >
                        <Image
                            src='/gallery/img7.jpg'
                            alt='image'
                            w={{md:'10.5em', lg:'16.25em'}}
                            objectFit={'cover'}
                            mb={{md:'0.25em'}}
                        />
                        <Flex>
                            <Image
                                src='/gallery/img5.jpg'
                                alt='image'
                                w={{md:'5.125em', lg:'8em'}}
                                mr={{md:'0.25em'}}
                                objectFit={'cover'}
                            />
                            <Image
                                src='/gallery/img6.jpg'
                                alt='image'
                                w={{md:'5.125em', lg:'8em'}}
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
                fontStyle={{base:'italic'}}
                fontSize={{ base: "0.75em", sm:'1em', md:'0.875em', lg: "1.25em" }}
                lineHeight={{ base: "2em", sm:'2.5em', md: "2em" }}
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
                                w={{md:'5.125em', lg:'8em'}}
                                mr={{md:'0.25em'}}
                                objectFit={'cover'}
                            />
                            <Image
                                src='/gallery/img6.jpg'
                                alt='image'
                                w={{md:'5.125em', lg:'8em'}}
                                objectFit={'cover'}
                            />
                        </Flex>                    
                        <Image
                            src='/gallery/img7.jpg'
                            alt='image'
                            w={{md:'10.5em', lg:'16.25em'}}
                            objectFit={'cover'}
                            mt={{md:'0.25em'}}
                        />
                    </Box>
                    
                    <Box>
                        <Image
                            src='/gallery/img8.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'11em'}}
                            h={{lg:'15.5em'}}
                            objectFit={'cover'}
                        />
                        <Image
                            src='/gallery/img9.jpg'
                            alt='image'
                            w={{md:'6.75em', lg:'11em'}}
                            mt={{md:'0.25em'}}
                            objectFit={'cover'}
                        />
                    </Box>
                </Flex>
            </Show>
            
        </Flex>
    )
}