'use client';

import { Box, Tabs, TabList } from '@chakra-ui/react'
import { albumList } from '../../components';
import { Nav, Gallery } from '../components';
import { useEffect, useState, useCallback } from 'react';

export default function Album({ params }) {
    const album = params.album;
    const tab = albumList.find((value) => value.query === album) || albumList[0];

    const [y, setY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("you have not scrolled yet");

    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            setScrollDirection("Scrolling Up");
        } else if (y < window.scrollY) {
            setScrollDirection("Scrolling Down");
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <Box
            bg={{base:'pink.light'}}
        >
            <Tabs
                variant='soft-rounded'
                colorScheme='pink'
                index={tab.id}
                display={{base:scrollDirection === 'Scrolling Down' ? 'none' : 'flex', md:'flex'}}
            >
                    <TabList
                        flexWrap={{base:'wrap'}}
                        position={{base:'fixed'}}
                        top={{base:'9.53125rem', sm:'10.7rem', md:'7rem', '2xl':'7.9375rem'}}
                        left={{base:'0'}}
                        right={{base:'0'}}
                        bg={{base:'pink.light'}}
                        p={{base:'0.25em 3%', sm:'0.25em 7%', md:'0.5em 4%'}}
                        zIndex={{base:'1'}}
                    >
                        {
                            albumList.map((value) => {
                                return <Nav {...value} key={value.id}/>
                            })
                        }
                    </TabList>
            </Tabs>

            <Box
                p={{base:'5.75em 0.5em 1em', sm:'5.7em 0.5em 1em', md:'3.75em 0.5em 1em'}}
            >
                <Gallery tab={tab.query} />
            </Box>
        </Box>
    );
}