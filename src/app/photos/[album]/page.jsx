'use client';

import { Box, Tabs, TabList, Center, Link, Text, Hide } from '@chakra-ui/react'
import { albumList } from '../../components';
import { Nav, Gallery } from '../components';
import { useEffect, useState, useCallback } from 'react';
import NextLink from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
                        top={{base:'9.6875rem', sm:'10.7rem', md:'7rem', '2xl':'7.9375rem'}}
                        left={{base:'0'}}
                        right={{base:'0'}}
                        bg={{base:'pink.light'}}
                        p={{base:'0.375em 3%', sm:'0.25em 7%', md:'0.5em 4%'}}
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
                p={{base:'5rem 0.5em 1em', sm:'5.7em 0.5em 1em', md:'3.75em 0.5em 1em'}}
            >
                <Gallery tab={tab.query} />
                {
                    'albumLink' in tab ? (
                        <Center
                            p={{base:'1.25em 0 0', sm:'1.25em 0 0', md:'2em 0 0.75em', lg:'1.75em 0 0.75em'}}
                        >
                            <Link
                                as={NextLink}
                                href={tab.albumLink}
                                className='transition ease-in-out hover:no-underline hover:font-bold hover:scale-110'
                                display={{base:'flex'}}
                                flexDir={{base:'column', md:'row'}}
                                alignItems={{base:'center'}}
                                justifyContent={{base:'center'}}
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <Text
                                    w={{base:'100%'}}
                                    textAlign={{base:'center'}}
                                    m={{base:'0 0 8px', sm:'4px 0 8px', md:'0 8px', lg:'0.5rem 0.5rem 0.5rem'}}
                                    fontSize={{base:'1.0625rem', sm:'1rem', md:'1.25rem', lg:'1.375rem'}}
                                >
                                    Xem thêm những bức hình xinh xẻo khác{' '}
                                    <Hide above='sm'>
                                        <br />
                                    </Hide>
                                    ở đây nè
                                </Text>
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </Link>
                        </Center>
                        ) : null
                }
            </Box>
        </Box>
    );
}