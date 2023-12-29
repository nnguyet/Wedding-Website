import { Text, Flex, Hide, Show } from '@chakra-ui/react'
import { Lobster } from "next/font/google";

const lobster = Lobster({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
});

export const Invitation = () => {
    return (
        <Flex
            textAlign={{base:'center'}}
            w={{base:'100%'}}
            flexDir={{base:'column'}}
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            p={{base:'1rem 0 1.75em', md:'1em 5% 1.75em', lg:'1em 0 2em'}}
            bg={{base:'yellow.light'}}
            color={{base:'green.dark'}}
        >
            <Text
                fontSize={{base:'3em'}}
                fontWeight={{base:'500'}}
                pb={{base:'0.25em' , md:'0.25em'}}
                className={lobster.className}
            >
                Tiệc mừng cưới
            </Text>

            <Flex
                fontSize={{base:'1em'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                flexDir={{base:'column'}}
                lineHeight={{base:'1.55em'}}
            >
                <Text
                    w={{base:'calc(min(21rem, 98%))', sm:'24rem', md:'37rem', lg:'44rem'}}
                >
                    Trong không khí rộn ràng của những ngày cuối năm, trân trọng kính mời/thân mời các khách quý đến dự buổi tiệc tối mừng cưới cùng{' '}
                    <Show breakpoint='(min-width:21.125rem)'>
                        <Hide above='sm'>
                            <br />
                        </Hide>
                    </Show>
                    Việt, Ngọc & gia đình.
                </Text>
                <Text
                    w={{base:'calc(min(22.5rem, 96%))', md:'100%'}}
                    py={{base:'0.2rem'}}
                >
                    Việt & Ngọc hy vọng mọi người  sẽ có một khoảng thời gian vui vẻ và thoải mái tại bữa tiệc.
                </Text>
                <Text
                    w={{base:'calc(min(22.5rem, 98%))', sm:'24.5rem', md:'43rem'}}
                    pb={{base:'0.2rem'}}
                >
                    Sự có mặt của các khách quý là niềm vinh dự{' '}
                    <Hide above='sm'>
                        <br />
                    </Hide>
                    to lớn cho gia đình chúng tôi, và đó cũng sẽ là những kỷ niệm khó quên trong ngày cưới, sẽ đi cùng với Việt & Ngọc cho đến suốt cuộc đời.
                </Text>
                <Text
                    w={{base:'calc(min(20rem, 98%))', md:'100%'}}
                >
                    Cảm ơn vì đã là một phần không thể thiếu trong ngày trọng đại này.
                </Text>
            </Flex>
        </Flex>
    )
}