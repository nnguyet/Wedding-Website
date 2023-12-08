import { Box, Flex } from '@chakra-ui/react'
import { NavItem } from './navItem'
import { SubNavItem } from './subNavItem'
import { albumList } from '../albumList';

export const Navigation = () => {
    return (
        <Flex
            display={{base:'none', md:'flex'}}
            borderRadius={{md:'1em'}}
            bg='pink.default'
            p={{md:'0.1em 1.5em'}}
            mt={{md:'0.5em'}}
        >
            <NavItem title='Trang Chủ' />
            <NavItem title='Lễ Cưới' href='/parties' />
            <SubNavItem title='Hình Ảnh' href='/photos' subContent={albumList}/>
            <NavItem title='Mừng Cưới' href='/wishes' />
        </Flex>
    )
}