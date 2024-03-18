import { Text, Image, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link';
// import for icon
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export const Footer = () => {
    const info = {
        'Điều phối': 'DarlingnPlanners',
        'Địa điểm tiệc VT': 'AromaCenter',
        'Địa điểm tiệc SG': 'Pavillon Tân Sơn Nhất',
        'M.U.A': 'Leps.Trinh Makeup',
        'M.U.A tiệc VT': 'Hà Thị',
        'Áo dài cưới': 'La Richesse Boutique',
        'Suit CR': 'Umvest',
        'Váy cuới': 'Kasew Bridal, Hestia Bridal',
        'Hình prewedding': 'The Love Museum',
        'Hình phóng sự cưới VT': 'Lệnh Đức - Tiệm ảnh dạo',
        'Hình phóng sự cưới SG & gia tiên': 'Will Productions',
        'Phim phóng sự cưới': '2Aproduction',
        'MC': 'Nguyễn Trọng Hữu',
        'Thiệp cưới': 'JAN Wedding Studio',
        'Khung tranh rót cát': 'Dailyme.Mint',
        'Hoa cưới': 'Fleurs des Moulie',
        'Florist chụp prewedding VT': 'Mangala.flower',
        'Mâm quả, decor nhà gái & tiệc VT': 'Dịch Vụ Cưới Hỏi Ngọc Trân',
        'Decor nhà trai & tiệc SG': 'Concept & Decor by Trinhchaste',
    }

    return (
        <Flex
            bg={{base:'pink.default'}}
            p={{base:'1em 0.5em 0.125em', md:'1em 1em 0.25em', lg:'1.25em 1.5em 0.5em'}}
            className='font-nunito'
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            flexDir={{base:'column'}}
        >
            {/*
            <Text
                textAlign={{base:'center'}}
                fontStyle={{base:'italic'}}
                fontSize={{base:'1rem', xl:'1.125rem'}}
                fontWeight={{base:'300'}}
                w={{base:'calc(min(20.125rem, 90%))', sm:'25rem', md:'28rem'}}
                m={{base:'auto'}}
            >
                Nếu cần hỗ trợ trong quá trình đến với sảnh tiệc có thể liên hệ qua team Wedding Planner của chúng mình nhé!
            </Text>
            <Image
                src='/images/contact.png'
                alt='contact-logo'
                w={{base:'11em', sm:'14em', md:'15em', xl:'16em'}}
                m={{base:'0.75em auto'}}
            />
            <Text
                textAlign={{base:'center'}}
                fontStyle={{base:'italic'}}
                fontSize={{base:'1rem', xl:'1.125rem'}}
                fontWeight={{base:'400'}}
                m={{base:'auto'}}
                pb={{base:'0.75em', md:'0.1em'}}
            >
                Trâm (Emma): 0828.498.209
                <br />
                Trân (Ori): 0938.301.168
            </Text>
            */}
            <Flex
                flexWrap='wrap'
                justifyContent='center'
                alignItems='center'
                w={{base:'100%', md:'80%'}}
                // w={{base:'calc(min(20.125rem, 90%))', sm:'25rem', md:'28rem'}}
                // m={{base:'auto'}}
                flexDirection={{base:'column', md:'row'}}
                // display={{base:'inline-flex'}}
                fontSize={{base:'0.875rem', md:'1rem', lg:'1.125rem'}}
            >
                {
                    Object.keys(info).map((key, index) => {
                        return (
                            <Flex
                                key={index}
                                flexWrap={{base:'wrap'}}
                                justifyContent={{base:'center'}}
                                alignItems={{base:'center'}}
                                position={{base:'relative'}}
                                mr={{base:'0', md:'1rem'}}
                                sx={{'&:not(:last-child)::after':{
                                    content:'" "',
                                    position:'absolute',
                                    right:'-0.5rem',
                                    top:'15%',
                                    width:'1px',
                                    height:'70%',
                                    backgroundColor:'#1A202C',
                                    display:{base:'none', md:'block'}
                                }}}
                            >
                                <Text
                                    textAlign={{base:'center'}}
                                    fontWeight={{base:'300'}}
                                    // m={{base:'auto'}}

                                >
                                    {key} :
                                </Text>
                                <Text
                                    textAlign={{base:'center'}}
                                    fontWeight={{base:'600'}}
                                    // m={{base:'auto'}}
                                    ml={{base:'0.25rem'}}
                                >
                                    {info[key]}
                                </Text>
                            </Flex>
                        )
                    })
                }
            </Flex>

            <Flex
                fontStyle={{base:'italic'}}
                m={{base:'1rem 0 0.25rem', md:'1.125rem 0 0.25rem'}}
                fontSize={{base:'0.875rem', md:'1rem'}}
            >
                <Flex
                    mt={{base:'0.1875rem'}}
                    mr={{base:'0.125rem'}}
                >
                    <FontAwesomeIcon icon={faCopyright} />
                </Flex>
                2023 - 2024 Developed by
                <Link
                    as={NextLink}
                    href='https://www.facebook.com/nguyet.29.21.3/'
                    _hover={{textDecoration:'none', fontWeight:'bold'}}
                    ml={{base:'0.25rem'}}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    nnguyet
                </Link>
            </Flex>

        </Flex>
    )
}