'use client';

import { Button } from '@chakra-ui/react'
// import for icon
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';


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
            ml={{base:'24px'}}
            fontSize={{base:'16px'}}
            className='hover:bg-transparent hover:text-textColor'
            color={{base:'pink.light'}}
            border={{base:'2px solid white'}}
            borderRadius={{base:'50%'}}
            w={{base:'24px'}}
            aspectRatio={{base:'1/1'}}
            onClick={handleMusic}
        >
            <audio ref={musicAudio} src="/music/Beautiful-In-White.mp3" loop />
            <FontAwesomeIcon className='ml-0.5' ref={play} icon={faPlay}/>
            <FontAwesomeIcon className='mr-0.5 hidden' ref={pause} icon={faPause}/>
        </Button>
    )
}