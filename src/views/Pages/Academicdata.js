import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Stat,
  StatLabel,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import { Academicinfo } from "variables/general";
import Academicstablerow from "components/Tables/Academicstablerow";
import { AcademicSummary } from "variables/general";

function Academicdata() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Internal Exam Results
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Subjects</Th>
                  <Th color="gray.400">
                    Cat1 <br />
                    (Marks Obtained)
                  </Th>
                  <Th color="gray.400">
                    Cat2 <br />
                    (Marks Obtained)
                  </Th>
                  <Th color="gray.400">
                    Model
                    <br />
                    (Marks Obtained)
                  </Th>
                  <Th color="gray.400">
                    University
                    <br />
                    (Marks Obtained)
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {Academicinfo.map((row) => {
                  return (
                    <Academicstablerow
                      row1={row.row1}
                      row2={row.row2}
                      row3={row.row3}
                      row4={row.row4}
                      row5={row.row5}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
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
                    Academic Results
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
                    Placement Statistics
                  </StatLabel>
                </Stat>
                <Box w="100%" h={{ sm: "225px" }} ps="8px">
                  <LineChart />
                </Box>
              </Flex>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Academic Summary
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {AcademicSummary.map((row) => {
                    return (
                      <Academicstablerow row1={row.row1} row2={row.row2} />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}

export default Academicdata;
