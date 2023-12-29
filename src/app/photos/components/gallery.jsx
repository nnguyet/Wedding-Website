import { Flex, Text, Box, Image, Hide, Show } from '@chakra-ui/react'
import { albumImage } from '../../components';
import { Fragment } from 'react';

export const Gallery = ({ tab }) => {
    const album = albumImage[tab];

    return (
        <Fragment>
            {
                album.length === 0 ? (
                    <Flex
                        justifyContent={{base:'center'}}
                        alignItems={{base:'center'}}
                        w={{base:'100%'}}
                        minH={{base:'35vh'}}
                    >
                        <Text
                            textAlign={{base:'center'}}
                            w={{base:'100%'}}
                            fontSize={{base:'1.5em', sm:'32px', md:'40px'}}
                            flexWrap={{base:'wrap'}}
                        >
                            Đợi chúng mình đăng hình sau nhé!
                        </Text>
                    </Flex>
                ) : (
                    <Box
                        sx={{ columnCount: {base:'2', sm:'3', md:'4', lg:'5'}, gap:{base:'8px'}}}
                        m={{base:'auto'}}
                    >
                        <Hide above='sm'>
                            {albumImage[tab+'-mobile'].map((value, index) => {
                                return (
                                    <Image
                                        src={`/albums/${tab}/${value}`}
                                        alt='img'
                                        fit={{base:'contain'}}
                                        borderRadius={{base:'8px'}}
                                        mb={{base:'8px'}}
                                        key={index}
                                    />
                                )
                            })}
                        </Hide>
                        
                        <Show above='sm'>
                            {album.map((value, index) => {
                                return (
                                    <Image
                                        src={`/albums/${tab}/${value}`}
                                        alt='img'
                                        fit={{base:'contain'}}
                                        borderRadius={{base:'8px'}}
                                        mb={{base:'8px'}}
                                        key={index}
                                    />
                                )
                            })}
                        </Show>
                    </Box>
                )
            }
        </Fragment>
    )
}