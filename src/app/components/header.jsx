'use client';

import { Flex } from '@chakra-ui/react'
import { Logo, Title, Music, Menu } from './header.section'
import {useEffect, useState, useCallback} from 'react';

export const Header = () => {
    const [y, setY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("Scrolling Up");

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
        <Flex
            display={{base:scrollDirection === 'Scrolling Up' || y === 0 ? 'flex' : 'none', md:'flex'}}
            justifyContent={{base:'space-around', '2xl':'center'}}
            alignItems={{base:'center'}}
            bg={{base:'pink.dark'}}
            flexDir={{base:'column', md:'row'}}
            position={{base:'fixed'}}
            top={{base:'0'}}
            left={{base:'0'}}
            right={{base:'0'}}
            zIndex={{base:'2'}}
            px={{base:'0', md:'2em', lg:'10%', xl:'17%'}}
            className='font-nunito'
        >
            <Logo />
            <Title />
            <Music />
            <Menu />
        </Flex>
    )
}