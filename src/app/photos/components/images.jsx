import { Image, Box } from '@chakra-ui/react'

export const Images = ({ tab, album }) => {
    return (
        <Box
            sx={{ columnCount: {base:'2', sm:'3', md:'4', lg:'5'}, gap:{base:'8px'}}}
            m={{base:'auto'}}
        >
            {album.map((value, index) => {
                return (
                    <Image
                        src={`/albums/${tab}/${value}`}
                        alt={value}
                        fit={{base:'contain'}}
                        borderRadius={{base:'8px'}}
                        mb={{base:'8px'}}
                        key={index}
                    />
                )
            })}
        </Box>
    )
}