import { Fragment } from 'react';
import { Image, Box, Text, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Center } from '@chakra-ui/react'
import { albumList } from '../../components';
import { Nav, Gallery } from '../components';
import { promises as fs } from 'fs';
import path from 'path';
// import {v2 as cloudinary} from 'cloudinary';

export default function Album({ params }) {
    const album = params.album;
    const tab = albumList.find((value) => value.query === album) || albumList[0];

    return (
        <Fragment>
            <Tabs
                variant='soft-rounded'
                colorScheme='pink'
                index={tab.id}
            >
                    <TabList
                        flexWrap={{base:'wrap'}}
                        position={{base:'fixed'}}
                        top={{base:'56px', md:'74px'}}
                        left={{base:'0'}}
                        right={{base:'0'}}
                        backgroundColor={{base:'white'}}
                        p={{base:'10px 3%', sm:'10px 7%', md:'8px 4% 16px'}}
                    >
                        {
                            albumList.map((value) => {
                                return <Nav {...value} key={value.id}/>
                            })
                        }
                    </TabList>
            </Tabs>
            
            <Gallery tab={tab.query} />
        </Fragment>
    );
}