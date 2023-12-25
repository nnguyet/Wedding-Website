'use client';

import { useRef } from 'react';
import { Button, Box, Flex } from '@chakra-ui/react'
// import for icon
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


export const Music = () => {
    const musicAudio = useRef(null);
    const play = useRef(null);
    const pause = useRef(null);

    const handleMusic = (e) => {
        e.preventDefault();
        console.log(pause.current);
        if (musicAudio.current.paused) {
            play.current.classList.add('hidden');
            pause.current.classList.remove('hidden');
            musicAudio.current.play();
        
        }
        else {
            play.current.classList.remove('hidden');
            pause.current.classList.add('hidden');
            musicAudio.current.pause();
        }
    }

    return (
        <Flex
            fontSize={{base:'0.7em', md:'0.8em'}}
            className='hover:bg-transparent hover:text-textColor hover:cursor-pointer'
            color={{base:'pink.light'}}
            border={{base:'2px solid white'}}
            borderRadius={{base:'50%'}}
            justifyContent={'center'}
            alignItems={'center'}
            w={{base:'2.6em'}}
            px={{base:'0.5em', md:'1em'}}
            mb={{base:'0.75em', md:'0'}}
            aspectRatio={{base:'1/1'}}
            onClick={handleMusic}
        >
            <audio ref={musicAudio} src="/music/audio.mp3" loop />
            <Flex
                ref={play}
                m={{base:'0.08em 0 0 0.2em', md:'0 0 0 0.1em'}}
                w={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <FontAwesomeIcon icon={faPlay}/>

            </Flex>
            <Flex
                ref={pause}
                className='hidden'
                w={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
            >
            <FontAwesomeIcon icon={faPause}/>

            </Flex>
        </Flex>
    )
}