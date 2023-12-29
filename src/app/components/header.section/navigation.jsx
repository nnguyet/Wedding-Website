import { Flex } from '@chakra-ui/react'
import { NavItem } from './navItem'
import { SubNavItem } from './subNavItem'
import { albumList } from '../albumList';

export const Navigation = () => {
    return (
        <Flex
            display={{base:'none', md:'flex'}}
            borderRadius={{md:'1em'}}
            bg='pink.default'
            p={{md:'0.1em 1.5em', lg:'0.1em 1.5em', xl:'0.1em 2.5em'}}
            mt={{md:'0'}}
            justifyContent={{md:'space-between'}}
            w={{lg:'40rem', xl:'44rem', '2xl':'52rem'}}
        >
            <NavItem title='Trang Chủ' />
            <NavItem title='Tiệc Mừng' href='/parties' />
            <SubNavItem title='Hình Ảnh' href='/photos' subContent={albumList}/>
            <NavItem title='Quà Cưới' href='/wishes' />
        </Flex>
    )
}