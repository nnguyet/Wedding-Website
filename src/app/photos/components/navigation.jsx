import { Tab, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Nav = ({ title, query }) => {
    return (
        <Tab
            m={{base:'auto'}}
            w={{base:'40%', sm:'35%', md:'auto'}}
            fontSize={{base:'0.9375rem', md:'1rem'}}
            _hover={{
                bg:'#ffedf2',
                color:'#7c2d12'
            }}
        >
            <Link
                as={NextLink}
                href={`/photos/${query}`}
                className='hover:no-underline' 
            >
                {title}
            </Link>
        </Tab>
    )
}