import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  Td,
  Input,
  useColorModeValue,
  Stat,
  StatLabel,
  Button,
  Box,
  isDisabled,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { Separator } from "components/Separator/Separator";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import { Feedback } from "variables/general";
import FeedbackTablerow from "components/Tables/FeedbackTablerow";

function Feedbackdata() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 0px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              HoD Feedback
            </Text>
          </CardHeader>
        </Card>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb="1.5rem"
                  >
                    Technical Skills
                  </StatLabel>
                </Stat>
                <BarChart />
              </Flex>
            </CardBody>
          </Card>
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb=".1rem"
                  >
                    Non-Technical Skills
                  </StatLabel>
                </Stat>
                <Box w="100%" h={{ sm: "225px" }} ps="8px">
                  <LineChart />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardBody p="6px 0px 0px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Remarks
            </Text>
          </CardBody>
          <Textarea marginTop="1rem" placeholder=" General Remarks" />
          <Flex direction="column" align="flex-end" w="100%">
            <Button
              marginTop="1rem"
              marginRight="1rem"
              colorScheme="orange"
              variant="solid"
            >
              Submit
            </Button>
          </Flex>
        </Card>
        <br />
        <hr />
        <br />
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 0px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Class Advisor Feedback
            </Text>
          </CardHeader>
        </Card>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb="1.5rem"
                  >
                    Technical Skills
                  </StatLabel>
                </Stat>
                <BarChart />
              </Flex>
            </CardBody>
          </Card>
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb=".1rem"
                  >
                    Non-Technical Skills
                  </StatLabel>
                </Stat>
                <Box w="100%" h={{ sm: "225px" }} ps="8px">
                  <LineChart />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardBody p="6px 0px 0px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Remarks
            </Text>
          </CardBody>
          <Textarea
            marginTop="1rem"
            isDisabled
            placeholder=" General Remarks"
          />
          <Flex direction="column" align="flex-end" w="100%">
            <Button
              marginTop="1rem"
              marginRight="1rem"
              colorScheme="orange"
              variant="solid"
            >
              Submit
            </Button>
          </Flex>
        </Card>
        <br />
        <hr />
        <br />
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 0px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Mentor Feedback
            </Text>
          </CardHeader>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardBody p="6px 0px 0px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Remarks
            </Text>
          </CardBody>
          <Textarea
            marginTop="1rem"
            isDisabled
            placeholder=" General Remarks"
          />
          <Flex direction="column" align="flex-end" w="100%">
            <Button
              marginTop="1rem"
              marginRight="1rem"
              colorScheme="orange"
              variant="solid"
            >
              Submit
            </Button>
          </Flex>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default Feedbackdata;
