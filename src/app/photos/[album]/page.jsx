import { Box, Tabs, TabList } from '@chakra-ui/react'
import { albumList } from '../../components';
import { Nav, Gallery } from '../components';

export default function Album({ params }) {
    const album = params.album;
    const tab = albumList.find((value) => value.query === album) || albumList[0];

    return (
        <Box
            bg={{base:'pink.light'}}
        >
            <Tabs
                variant='soft-rounded'
                colorScheme='pink'
                index={tab.id}
            >
                    <TabList
                        flexWrap={{base:'wrap'}}
                        position={{base:'fixed'}}
                        top={{base:'9.6em', sm:'10.7em', md:'7rem'}}
                        left={{base:'0'}}
                        right={{base:'0'}}
                        bg={{base:'pink.light'}}
                        p={{base:'0.25em 3%', sm:'0.25em 7%', md:'0.5em 4%'}}
                    >
                        {
                            albumList.map((value) => {
                                return <Nav {...value} key={value.id}/>
                            })
                        }
                    </TabList>
            </Tabs>

            <Box
                p={{base:'5.75em 0.5em 1em', sm:'5.7em 0.5em 1em', md:'3.75em 0.5em 1em'}}
            >
                <Gallery tab={tab.query} />
            </Box>
        </Box>
    );
}