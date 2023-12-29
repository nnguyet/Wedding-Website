import { Flex, Text, Box, Image, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { albumImage } from '../../components';
import { Images } from './images';
import { Fragment } from 'react';

export const Gallery = ({ tab }) => {
    const album = albumImage[tab];
    // switch (album.length) {
    //     case 0:
    //         return (
    //             <Flex
    //                 justifyContent={{base:'center'}}
    //                 alignItems={{base:'center'}}
    //                 w={{base:'100%'}}
    //                 minH={{base:'35vh'}}
    //             >
    //                 <Text
    //                     textAlign={{base:'center'}}
    //                     w={{base:'100%'}}
    //                     fontSize={{base:'1.5em', sm:'32px', md:'40px'}}
    //                     flexWrap={{base:'wrap'}}
    //                 >
    //                     Đợi tụi mình đăng hình sau nhé!
    //                 </Text>
    //             </Flex>
    //         )
    //     case 52:
    //         return (
    //             <Tabs
    //                 variant='soft-rounded'
    //                 colorScheme='pink'
    //             >
    //                 <TabPanels>
    //                     <TabPanel p={{base:'0'}} >
    //                         <Images tab={tab} album={album.slice(0, 26)} />
    //                     </TabPanel>
    //                     <TabPanel>
    //                         <Images tab={tab} album={album.slice(26, 52)} />
    //                     </TabPanel>
    //                 </TabPanels>
    //                 <TabList
    //                     justifyContent={{base:'center'}}
    //                     alignItems={{base:'center'}}
    //                     mt={{base:'1rem'}}
    //                 >
    //                     <Tab>1</Tab>
    //                     <Tab>2</Tab>
    //                 </TabList>
    //             </Tabs>
    //         )
    //     default:
    //         return (
    //             <Flex
    //                 justifyContent={{base:'center'}}
    //                 alignItems={{base:'center'}}
    //                 w={{base:'100%'}}
    //                 minH={{base:'35vh'}}
    //             >
    //                 <Text
    //                     textAlign={{base:'center'}}
    //                     w={{base:'100%'}}
    //                     fontSize={{base:'1.5em', sm:'32px', md:'40px'}}
    //                     flexWrap={{base:'wrap'}}
    //                 >
    //                     Đợi tụi mình đăng hình sau nhé!
    //                 </Text>
    //             </Flex>
    //         )
    // }

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
                            Đợi tụi mình đăng hình sau nhé!
                        </Text>
                    </Flex>
                ) : (
                    
                    <Box
                        sx={{ columnCount: {base:'2', sm:'3', md:'4', lg:'5'}, gap:{base:'8px'}}}
                        m={{base:'auto'}}
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