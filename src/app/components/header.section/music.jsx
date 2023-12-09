'use client';

import { useRef } from 'react';
import { Button } from '@chakra-ui/react'
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
        <Button
            m={{base:'0.5em 0.5em 0.5em 0', md:'0 0 0 1em'}}
            fontSize={{base:'0.7em', md:'0.8em'}}
            className='hover:bg-transparent hover:text-textColor'
            color={{base:'pink.light'}}
            border={{base:'2px solid white'}}
            borderRadius={{base:'50%'}}
            size={{base:'sm', sm:'sm'}}
            px={{base:'0.5em', md:'1em'}}
            aspectRatio={{base:'1/1'}}
            onClick={handleMusic}
        >
            <audio ref={musicAudio} src="/music/Beautiful-In-White.mp3" loop />
            <FontAwesomeIcon className='ml-0.5' ref={play} icon={faPlay}/>
            <FontAwesomeIcon className='mr-0.5 hidden' ref={pause} icon={faPause}/>
        </Button>
    )
}