import React from "react";
// import axios from "axios";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Router,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import handleLogin from "../../controller/UserloginCtrl";
// Assets
import signInImage from "assets/img/signInImage.png";

function login(e) {
  e.preventDefault();
  console.log(document.getElementById("emailId").value);
z}


function SignIn() {
  const titleColor = useColorModeValue("orange.300", "orange.200");
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          paddingTop="10rem"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="60%"
            h="60%"
            bgSize="300px 300px"
            bgRepeat="no-repeat"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box>
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <form onSubmit={login}>
              <Text
                mb="36px"
                ms="4px"
                color={textColor}
                fontWeight="bold"
                fontSize="14px"
              >
                Enter your email and password to sign in
              </Text>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Email
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  id="emailId"
                  placeholder="Your email adress"
                  size="lg"
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Password
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="20px"
                  fontSize="sm"
                  id="password"
                  type="password"
                  placeholder="Your password"
                  size="lg"
                />
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  maxW="100%"
                  mt="0px"
                >
                  <Text color="red" id="email-fail" display="none">
                    Incorrect Username
                  </Text>
                  <Text color="red" id="pass-fail" display="none">
                    Incorrect Password
                  </Text>
                  <Text color="red" id="serror-fail" display="none">
                    Server Error. Try again after some time
                  </Text>
                </Flex>
                <Button
                  fontSize="1rem"
                  type="submit"
                  bg="orange.300"
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="15px"
                  _hover={{
                    bg: "orange.200",
                  }}
                  _active={{
                    bg: "orange.400",
                  }}
                  id="login_btn"
                  onClick={handleLogin}
                >
                  SIGN IN
                </Button>
              </FormControl>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignIn;
