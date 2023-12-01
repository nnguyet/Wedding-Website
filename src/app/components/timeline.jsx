import { Heading, Box, Text } from '@chakra-ui/react'
import { Party } from './timeline.section'

export const Timeline = () => {
    return (
        <Box my='24px'>
            <Heading
                as='h1'
                textAlign='center'
                display={{base:'flex'}}
                flexDir={{base:'column', sm:'row'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
            >
                <Text>THANH VIỆT</Text>
                <Text m={{base:'-6px', sm:'8px', md:'12px'}}> & </Text>
                <Text>MINH NGỌC</Text>
            </Heading>
            <Party img='/images/img1.jpg' title='Tiệc Vu Quy' info='17:30 | Thứ Tư - 17.01.2024 | Vũng Tàu' address='Aroma Center - 119 Hoàng Hoa Thám, P. Thắng Tam, TP. Vũng Tàu' />
            <Party img='/images/img1.jpg' title='Lễ Gia tiên' info='7:00 | Thứ Năm - 18.01.2024 | Tư gia' order='1' />
            <Party img='/images/img1.jpg' title='Tiệc Thành hôn' info='17:30 | Thứ Bảy - 20.01.2024 | TP. HCM' address='Pavillon Tân Sơn Nhất - 202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận, TP. HCM' />
        </Box>
    )
}