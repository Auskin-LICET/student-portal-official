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
import GeneralParticularstablerow from "components/Tables/GeneralParticularstablerow";
import { GeneralParticulars } from "variables/general";
import { HigherSecondaryDetails } from "variables/general";
import { SecondaryDetails } from "variables/general";
import { Father, Mother } from "variables/general";
import { AdmissionDetails } from "variables/general";
import { ScholarshipDetails } from "variables/general";
import { TechnicalSkills } from "variables/general";
import { NonTechnicalSkills } from "variables/general";
import { Goals } from "variables/general";
import { ProfessionalMembership } from "variables/general";

function GeneralInformationdata() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={4}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Particulars
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                {GeneralParticulars.map((row) => {
                  return (
                    <GeneralParticularstablerow
                      field={row.field}
                      data={row.data}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Higher Secondary Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {HigherSecondaryDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                10th Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {SecondaryDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Father's Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {Father.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Mother's and Sibling Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {Mother.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Admission Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {AdmissionDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Scholarship Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {ScholarshipDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Technical Skills
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {TechnicalSkills.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Non - Technical Skills
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {NonTechnicalSkills.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Goals / Technical / Non -Technical Profficieny
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {Goals.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Professional Membership
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {ProfessionalMembership.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
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

export default GeneralInformationdata;
