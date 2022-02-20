import React, { Component } from "react";

import { Text, Box, Button, ButtonGroup, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner } from "@chakra-ui/react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
    const settings1 = {
        dots: false,
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
  
  <Flex w="90%" justify="center" mt="100px"  p="0" boxShadow="xs" rounded="md"  >
    <Box w="100%" p="0"  >
  <Slider {...settings1}>
  
  <Box  >
            <Center w = "100%" h="400px" rounded="md" bgPosition="center"  bgGradient="url(crocs13.jpg)">
            <Box>
            <Text fontSize="75px" fontWeight="900" color="#BEE3A9" textShadow="1px 1px #9CD474"> Crocs is the new cool </Text>
            <Center>
            
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
  </Center></Box></Center>
  </Box>

  <Box  >
            <Center w = "100%" h="400px" rounded="md" bgPosition="center"  bgGradient="url(crocs6.png)">
            <Box>
            <Text fontSize="75px" fontWeight="900" color="#BEE3A9" textShadow="1px 1px #9CD474"> Crocs is the new cool </Text>
            <Center>
            
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
</Box></Center></Box></Center>
  </Box>

  <Box  >
            <Center w = "100%" h="400px" rounded="md" bgPosition="center"  bgGradient="url(crocs11.jpg)">
            <Box>
            <Text fontSize="75px" fontWeight="900" color="#BEE3A9" textShadow="1px 1px #9CD474"> Crocs is the new cool </Text>
            <Center>
            
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
</Box></Center></Box></Center>
  </Box>

  <Box  >
            <Center w = "100%" h="400px" rounded="md" bgPosition="center"  bgGradient="url(crocs12.jpg)">
            <Box>
            <Text fontSize="75px" fontWeight="900" color="#BEE3A9" textShadow="1px 1px #9CD474"> Crocs is the new cool </Text>
            <Center>
            
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
</Box></Center></Box></Center>
  </Box>


            
          </Slider>
          </Box>
          </Flex>
  
</Center>
    )
}

export default Slides