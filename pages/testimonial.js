import React, { Component } from "react";

import { Text, Box, Button, ButtonGroup, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner } from "@chakra-ui/react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        fade: true,
        speed: 100,
        autoplaySpeed: 4000, 
      };
    return(
        <Center>
  
  <Flex w="90%"  justify="center" mt="100px"  p="0" boxShadow="xs" rounded="md"  >
    <Box w="100%" p="0"  >
  <Slider {...settings1}>
      
  <Flex  w="100%" bgColor="#9CD474" overflow="hidden" rounded="md">
           
            <Box  >
            
            <Flex justifyContent="space-between">
  <Box w="50%" pl="50px" pr="50" ><Box mt="70px"><Text fontSize="75px" fontWeight="900">"drip drip"</Text></Box> <Box><Text fontWeight="450" fontSize="22px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Box>
  <Box w="50%"><Image src="test10.jpg"    w = "100%" h="500px"   alt="Segun Adebayo" p="0" /></Box>
  </Flex></Box>
  </Flex>

  
  <Flex w="100%" bgColor="#9CD474" overflow="hidden" rounded="md">
            
            <Box>
            
            <Flex justifyContent="space-between">
  <Box w="50%" pl="50px" pr="50"><Box mt="70px"><Text fontSize="75px" fontWeight="900">"The best"</Text></Box> <Box><Text fontWeight="450" fontSize="22px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Box>
  <Box w="50%"><Image src="test1.png"   w = "100%" h="500px"    alt="Segun Adebayo" p="0"  /></Box>
  </Flex></Box>
  </Flex>

  
  <Flex w="100%" bgColor="#9CD474" overflow="hidden" rounded="md">
            
            <Box>
            
            <Flex justifyContent="space-between" >
  <Box w="50%" pl="50px" pr="50"><Box mt="70px"><Text fontSize="75px" fontWeight="900">"Crocing It"</Text></Box> <Box><Text fontWeight="450" fontSize="22px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Box>
  <Box w="50%"><Image src="test9.jpg"  w = "100%" h="500px"   alt="Segun Adebayo"  p="0" /></Box>
  </Flex></Box>
  </Flex>
          
          </Slider>
          </Box>
          </Flex>
  
</Center>
    )
}

export default Testimonial