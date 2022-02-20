import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner } from "@chakra-ui/react";

  import Girl from "../Girl"
  import Wobbly from "../Wobbly"


  import {Canvas} from "@react-three/fiber"
  import {OrbitControls} from "@react-three/drei"

  const Lady = () => {
      return(
        <Box h="500px">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.6} />
          <Girl />
        </Canvas>
        </Box>
      )
  }

export default Lady