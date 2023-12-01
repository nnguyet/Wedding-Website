import { Hide, Divider, Center } from '@chakra-ui/react'

export const VerticalLine = ({ h='36px', m='12px', color='black' }) => {
    return (
        <Hide above='md'>
            <Center m={{base:m}}>
                <Divider
                    borderColor={{base:color}}
                    orientation='vertical'
                    h={{base:h}}
                />
            </Center>
        </Hide>
    )
}