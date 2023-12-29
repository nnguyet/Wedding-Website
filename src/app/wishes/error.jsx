'use client' // Error components must be Client Components

import { Heading, Button, Center } from '@chakra-ui/react'
 
export default function WishesError({ error, reset }) {
	return (
		<Center
			flexDir={{base: 'column'}}
		>
			<Heading
				as='h1'
				m={{base:'2.25rem auto', md:'8rem auto 3rem'}}
				textAlign={{base:'center'}}
			>
				Xảy ra lỗi khi tải trang!
			</Heading>
			<Button
				mb={{base:'2rem', md:'6rem'}}
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