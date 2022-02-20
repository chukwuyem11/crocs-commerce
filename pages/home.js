import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner } from "@chakra-ui/react";
  import Link from 'next/link'
  import Slides from "./slides"
  import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  import { PlusSquareIcon } from '@chakra-ui/icons'
  import useSWR , {SWRConfig}from "swr";
  import axios from "axios";
  import { useCart } from "react-use-cart";
  import Testimonial from "./testimonial"
 
import Lady from "./lady"

 

import {
  signIn,
  signOut,
  useSession,
  getSession,
  getCsrfToken,
} from "next-auth/client";
import { useRouter } from 'next/router'


import Heading from "./nav"



const Home = () => {
  const { data, error } = useSWR("/api/createProducts", axios);

  const { addItem } = useCart();
  

  
  if (error) return <Heading> <Box >
    
  
    <Slides />


</Box>


<Center> <Box>
      <Text fontSize={20}  color="#000000">
          Error, please try again...
      </Text>
  </Box>
  </Center>
 

<Testimonial />

</Heading>;
    console.log(error);
    if (!data) return (<Heading>
        <Box >

        <Slides />



</Box>

<Flex mt="50px" align="center" alignItems="center" justify="center" >
        <Spinner size="xl" />
     </Flex>

<Testimonial />
</Heading>)
    return(
        <Heading>
            <Box >
        
        
    
 <Slides />




</Box>


<Box >


    { data.data.names.length === 0 ? <Center mt="50px">
                  <Box>
                      <Text fontSize={30}  bgGradient="linear(to-l, #044CAC, #7CA4D4)"
  bgClip="text">
                          No Products
                      </Text>
                  </Box>
              </Center> : <Center mt="50px"> <Flex w="90%" alignItems="center"  justifyContent="space-between">
    


    {data.data.names.map((names) => ( <Flex  >
     
        <Center > <Flex flexWrap="wrap" justifyContent="space-between" flexDirection={["column", "row", "row"]}> <Box key={names.id} boxShadow="lg" p="6" rounded="md" bg="white"><Image src="crocs9.jpg"  boxShadow="2xl" p="6" rounded="md" w="260px" h="334px" mt="-30px"  alt="Segun Adebayo"  p="0" /><Box mt="40px">
    <Flex justifyContent="space-between">
        <Box>
<Text>{names.name}</Text>
    <Text>{names.price}</Text>
    </Box>
    <Box>
    <IconButton
    color="#9CD474"
    variant="outline"

  colorScheme="green"
  aria-label="Search database"
  onClick={() => addItem(names)}
  icon={<PlusSquareIcon />}
/>
</Box>
</Flex>   </Box> </Box></Flex></Center> 

</Flex>))} 
</Flex> </Center>}
    
    

<Center>
<Flex w="90%" mt="50px">
         
<Box
  as="button"
  height="24px"
  lineHeight="1.2"
  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
  
  pt="10px"
  pl="10px"
  pr="10px"
  pb="30px"
  borderRadius="5px"
  fontSize="17px"
  fontWeight="semibold"
  bg="#000000"
  
  color="#ffffff"
  _hover={{ bg: "#BEE3A9", color:"#000000" }}
  _active={{
    bg: "#dddfe2",
    transform: "scale(0.98)",
    borderColor: "#bec3c9",
  }}
  _focus={{
    boxShadow:
      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
  }}
>
  Shop Now
</Box>
</Flex>
</Center>


<Testimonial />


</Box>


        </Heading>
    )
}

export default Home