import { Box, Text, Show } from '@chakra-ui/react'

export const Introduction = () => {
    return (
        <Box
            p={{base:'1em 0', sm:'0.75rem 0 1rem', md:'1em 0', lg:'0.25rem 0 1rem'}}
            bg={{base:'pink.dark'}}
            fontSize={{ base: "1em", md:'0.875rem', lg:'1rem', xl:'1.0625em' }}
            fontStyle={{base:'italic'}}
        >
            <Text
                fontSize={{ base: "2.75rem", sm: "3.125rem", md:'3.375rem', lg:'3.5rem', xl: "4.5rem" }}
                textAlign={{base:'center'}}
                pb={{ base: "0.125em", md:'0'}}
                className='font-corinthia'
            >
                Ngày mình có nhau
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", md:'1.75em' }}
                w={{base:'100%'}}
                p={{base:'0 1rem', md:'0'}}
                m={{base:'auto'}}
            >
                Ngọc bảo: {'\"'}Em thích tự làm tất cả mọi thứ{'\"'}.
                <br />
                Vì thế, chúng mình đã dành hơn nửa năm để lên kế hoạch và bắt tay vào chuẩn bị cho chiếc sự kiện đặc biệt này.
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", md:'1.75em' }}
                w={{base:'100%', md:'46em'}}
                p={{base:'0.5rem 0.375rem 0', sm:'0.375rem 0.375rem 0', md:'0.375rem 0 0'}}
                m={{base:'auto'}}
            >
                Từ việc chọn từng bó hoa cưới, suy nghĩ ý tưởng thiết kế thiệp rồi lại ngồi nắn nót ghi tên từng vị khách, tỉ mỉ gói từng món quà, chở nhau lượn khắp SG - VT để tìm ra chiếc váy chiếc vest ưng ý...{' '}
                <Show above='md'>
                    <br />
                </Show>
                Dù vất vả nhiều chút, nhưng chúng mình vui khi được hiện thực hóa ước mơ cùng nhau.
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", md:'1.75em' }}
                w={{base:'100%', md:'40em', lg:'53em'}}
                p={{base:'0.5em 0.5em 0', sm:'0.375em 0.75em 0', md:'0.375rem 0 0'}}
                m={{base:'auto'}}
            >
                Đó sẽ là một ngày gió nhẹ, có nắng vàng. Một đám cưới diễn ra, chúng mình bên nhau, bên những người thương nhất, được họ chứng kiến và cứ thế trở thành vợ chồng.
            </Text>
        </Box>
    )
}