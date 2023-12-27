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
            p={{md:'0.1em 1.5em', lg:'0.1em 1em'}}
            mt={{md:'0'}}
            justifyContent={{md:'space-between'}}
            w={{lg:'37rem'}}
        >
            <NavItem title='Trang Chủ' />
            <NavItem title='Tiệc Mừng' href='/parties' />
            <SubNavItem title='Hình Ảnh' href='/photos' subContent={albumList}/>
            <NavItem title='Quà Cưới' href='/wishes' />
        </Flex>
    )
}