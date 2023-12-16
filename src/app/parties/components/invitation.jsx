import { Box, Text, Flex } from '@chakra-ui/react'

export const Invitation = () => {
    return (
        <Flex
            textAlign={{base:'center'}}
            w={{base:'100%'}}
            flexDir={{base:'column'}}
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            p={{base:'1em 100%', md:'2em 20% 3em'}}
            bg={{base:'yellow.light'}}
            color={{base:'green.dark'}}
        >
            <Text
                fontSize={{base:'3.5em'}}
                fontWeight={{base:'bold'}}
                pb={{base:'0.5em'}}
                // pt={{base:'0', md:'0.5em'}}
            >
                Tiệc mừng cưới
            </Text>

            <Text
                fontSize={{base:'1em'}}
            >
                <Text>
                    Trong không khí rộn ràng của những ngày cuối năm, trân trọng kính mời các khách quý đến dự buổi tiệc tối mừng cưới cùng Việt, Ngọc & gia đình.
                </Text>
                <Text>
                    Việt & Ngọc hy vọng mọi người  sẽ có một khoảng thời gian vui vẻ và thoải mái tại bữa tiệc.
                </Text>
                <Text>
                    Sự có mặt của các khách quý  là niềm vinh dự to lớn cho gia đình chúng tôi, và đó cũng sẽ là những kỷ niệm khó quên trong ngày cưới, sẽ đi cùng với Việt & Ngọc cho đến suốt cuộc đời.
                </Text>
                <Text>
                    Cảm ơn vì đã là một phần không thể thiếu trong ngày trọng đại này.
                </Text>
            </Text>
        </Flex>
    )
}