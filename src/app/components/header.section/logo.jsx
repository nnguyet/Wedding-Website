import { Image } from '@chakra-ui/react'

export const Logo = () => {
    return (
        <Image
            src='/images/logo.png'
            alt='monogram'
            w={{base:'5em'}}
            mr={{base:'24px'}}
        />
    )
}