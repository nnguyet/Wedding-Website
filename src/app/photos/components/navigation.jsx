import { Tab, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Nav = ({ title, query }) => {
    return (
        <Tab
            m={{base:'auto'}}
            w={{base:'auto', sm:'35%', md:'auto'}}
            p={{base:'0.25rem 0.75rem', md:'0.375rem 1.5rem'}}
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