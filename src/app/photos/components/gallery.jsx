import { Grid, GridItem, Image, Flex, Box, Text } from '@chakra-ui/react'
import { Fragment } from 'react';
import { albumImage } from '../../components';

export const Gallery = ({ tab }) => {
    const album = albumImage[tab];

    return (
        <Fragment>
            {
                album.length === 0 ? (
                    <Text
                        textAlign={{base:'center'}}
                        w={{base:'85%'}}
                        fontSize={{base:'24px', sm:'32px', md:'40px'}}
                        m={{base:'256px auto 0'}}
                        flexWrap={{base:'wrap'}}
                    >
                        Đợi tụi mình đăng hình sau nhé!
                    </Text>
                ) : (
                    <Box
                        sx={{ columnCount: {base:'2', sm:'3', md:'4', lg:'5'}, gap:{base:'8px'}}}
                        mt={{base:'162px', sm:'158px', md:'140px'}}
                        mx={{base:'8px'}}
                        mb={{base:'8px'}}
                    >
                        
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
                    </Box>
                )
            }
        </Fragment>
    )
}