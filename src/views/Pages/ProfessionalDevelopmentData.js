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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ProfessionalDevelopmenttablerow from "components/Tables/ProfessionalDevelopmentTablerow";
import { IndustrialVist } from "variables/general";
import { InplantTraining } from "variables/general";
import { GuestLecture } from "variables/general";
import { MotivationalTalks } from "variables/general";
import { Internships } from "variables/general";
import { ValueAddedCourse } from "variables/general";
import { Workshop } from "variables/general";
import { Webinar } from "variables/general";
import { Competition } from "variables/general";
import { PlacementTraining } from "variables/general";
import { MiniProject } from "variables/general";
import { FinalProject } from "variables/general";
import { Publications } from "variables/general";

function ProfessionalDevelopmentData() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <Grid
        columns={{ sm: 1, md: 2, xl: 2 }}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Industrial Visit
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {IndustrialVist.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Implant Training
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {InplantTraining.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Guest Lecture
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {GuestLecture.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Motivational Talks
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {MotivationalTalks.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Internships
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Company</Th>
                    <Th color="gray.400">Duration In Months</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Reference</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Internships.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Value Added Course
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Course Name</Th>
                    <Th color="gray.400">Platform</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {ValueAddedCourse.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Workshop
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Workshop.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Webinar
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Webinar.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Competition
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name</Th>
                    <Th color="gray.400">
                      Type Of Competition (Coding / Project)
                    </Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Position Secured</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Competition.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Placement Training
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Aptitude</Th>
                    <Th color="gray.400">Soft Skill</Th>
                    <Th color="gray.400">Reasoning</Th>
                    <Th color="gray.400">Technical Skill</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {PlacementTraining.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Mini Project
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Duration</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {MiniProject.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Final Project
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {FinalProject.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Publications
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Conference / Journal</Th>
                    <Th color="gray.400">Name of Conference / Journal</Th>
                    <Th color="gray.400">Title Of the Article</Th>
                    <Th color="gray.400">Impact Factor</Th>
                    <Th color="gray.400">Indexed In</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Publications.map((row) => {
                    return (
                      <ProfessionalDevelopmenttablerow
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
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default ProfessionalDevelopmentData;
