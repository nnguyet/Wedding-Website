'use client' // Error components must be Client Components
 
// import { useEffect } from 'react'
import { Box, Text, Heading, Button, Center } from '@chakra-ui/react'
 
export default function HomeError({ error, reset }) {
	return (
		<Center
			flexDir={{base: 'column'}}
		>
			<Heading
				as='h1'
				m={{base:'36px auto', md:'128px auto 48px'}}
				textAlign={{base:'center'}}
			>
				Xảy ra lỗi khi tải trang!
			</Heading>
			<Button
				onClick={
					(e) => {
						e.preventDefault()
						reset()
					}
				}
			>
				Thử lại
			</Button>
		</Center>
	)
}