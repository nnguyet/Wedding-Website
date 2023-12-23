import { Fragment } from 'react';
import { Image, Box, Text, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Center } from '@chakra-ui/react'
import { albumList } from '../../components';
import { Nav, Gallery } from '../components';

export default function Album({ params }) {
    const album = params.album;
    const tab = albumList.find((value) => value.query === album) || albumList[0];

    return (
        <Box
            bg={{base:'pink.light'}}
        >
            <Tabs
                variant='soft-rounded'
                colorScheme='pink'
                index={tab.id}
            >
                    <TabList
                        flexWrap={{base:'wrap'}}
                        position={{base:'fixed'}}
                        top={{base:'8.875em', sm:'9.375em', md:'6.75em'}}
                        left={{base:'0'}}
                        right={{base:'0'}}
                        bg={{base:'pink.light'}}
                        p={{base:'0.5em 3%', sm:'0.5em 7%', md:'0.75em 4%'}}
                    >
                        {
                            albumList.map((value) => {
                                return <Nav {...value} key={value.id}/>
                            })
                        }
                    </TabList>
            </Tabs>

            <Box
                p={{base:'6.125em 0.5em 1em', sm:'6em 0.5em 1em', md:'4em 0.5em 1em'}}
            >
                <Gallery tab={tab.query} />
            </Box>
        </Box>
    );
}