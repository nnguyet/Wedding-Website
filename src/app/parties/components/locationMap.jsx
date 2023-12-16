'use client';

import { Heading, Box, Text, Grid, GridItem, Button, Link, Flex } from '@chakra-ui/react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

// function App() {
//   const position = {lat: 61.2176, lng: -149.8997};

//   return (
//     <APIProvider apiKey={'YOUR_API_KEY'}>
//       <Map center={position} zoom={10}>
//         <Marker position={position} />
//       </Map>
//     </APIProvider>
//   );
// }

// export default App;

export const LocationMap = () => {
    const position = {lat: 61.2176, lng: -149.8997};

    return (
        // <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
            <Flex
                w={{base:'80%'}}
                m={{base:'1em auto'}}
                justifyContent={{base:'space-between'}}
                alignItems={{base:'center'}}

            >
                {/* <Map center={position} zoom={10}>
                    <Marker position={position} />
                </Map> */}
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.033427941641!2d107.08260717411639!3d10.339209967107976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756ff6b6411cdd%3A0xa7040a8de32b73ed!2zVHJ1bmcgdMOibSBUaeG7h2MgY8aw4bubaSAmIEjhu5lpIG5naOG7iyBBUk9NQSBDRU5URVI!5e0!3m2!1svi!2s!4v1702745322353!5m2!1svi!2s" width="500" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.538855086552!2d106.6708459!3d10.8009928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928af1513fb%3A0xd2651b40d27136ec!2zTmjDoCBIw6BuZyBQYXZpbGxvbg!5e0!3m2!1svi!2s!4v1702745079858!5m2!1svi!2s" width="500" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Flex>
        // </APIProvider>
    )
}