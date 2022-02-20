import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Image, Center } from "@chakra-ui/react";

  const PageDesign = ({title, children}) => {
      return (
          
          <Box>
              <Center>
             
                  <Flex  w="90%"  >
                      
                      
            <Center w = "100%" h="400px" mt="100px" rounded="md" bgPosition="center"  bgGradient="url(crocs1.jpg)">
              <Box>
            <Text fontSize="75px" fontWeight="900" color="#ffffff"> {title} </Text>
            </Box></Center>
                      
                  </Flex>
                  </Center>
             
              <Box>
                  {children}
              </Box>
          </Box>
      )
  }

  export default PageDesign