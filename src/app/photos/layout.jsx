import React from "react"
import { Heading, Center, Flex, Button, Text, Show, Link } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import NextLink from 'next/link'


export default function PhotosLayout({ children }) {
    return (
        <React.Fragment>
            <section>
                {children}
            </section>
        </React.Fragment>
    )
}