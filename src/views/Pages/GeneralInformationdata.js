import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Tr,
  Td,
  useColorModeValue,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GeneralParticularstablerow from "components/Tables/GeneralParticularstablerow";
function GeneralInformationdata({ location }) {
  const [data, setData] = useState([]);

  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));

  axios.post("http://localhost:5000/GeneralData", params).then((items) => {
    setData(items.data);
  });

  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  var GData = GeneralParticularstablerow;
  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Particulars
            </Text>
          </CardHeader>

          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.sname} field="Student Name" />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.roll_no} field="Roll No." />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.reg_no} field="Register No." />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.gender} field="Sex" />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.dob} field="Date Of Birth" />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData data={item.nationality} field="Nationality" />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.religion} field="Religion" />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData
                        data={item.if_catholic_parish}
                        field="If Catholic, Parish?"
                      />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData
                        data={item.dalit_catholic_yn}
                        field="Dalit Catholic"
                      />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.community} field="Community" />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData data={item.blood_group} field="Blood Group" />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData data={item.mother_tongue} field="Mother Tongue" />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData data={item.contant_no} field="Contact Number" />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return <GData data={item.aadhar_no} field="Aadhar No." />;
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData
                        data={item.licet_email}
                        field="Official Email ID"
                      />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData data={item.email} field="personal Email ID" />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData
                        data={item.present_address}
                        field="Present Address"
                      />
                    );
                  })}
                </Tr>
                <Tr>
                  {data.map((item) => {
                    return (
                      <GData
                        data={item.permanent_address}
                        field="Permanent Address"
                      />
                    );
                  })}
                </Tr>
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
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.hse_school_name}
                          field="Name of the school"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.hse_board} field="Board" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.hse_medium}
                          field="Medium of Instruction"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.hse_sec_lang}
                          field="Second Language"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.hse_group} field="Group" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.hse_marks} field="Total Marks" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.hse_percentage}
                          field="Overall Percentage"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.hse_cutoff} field="Cut-Off Marks" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.hse_attempts}
                          field="No. of Attempts"
                        />
                      );
                    })}
                  </Tr>
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
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.sslc_school_name}
                          field="Name of the school"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.sslc_board} field="Board" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.sslc_medium}
                          field="Medium of Instruction"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.sslc_sec_lang}
                          field="Second Language"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.sslc_marks} field="Total Marks" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.sslc_percentage}
                          field="Overall Percentage"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.sslc_attempts}
                          field="No. of Attempts"
                        />
                      );
                    })}
                  </Tr>
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
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.father_name} field="Father's Name" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.father_qualification}
                          field="Father's Qualification"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.father_occupation}
                          field="Father's Occupation"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.father_office_address}
                          field="Father's Office Address"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.father_annual_income}
                          field="Father's Annual Income"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.father_mob_no}
                          field="Father's Mobile No."
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.father_email}
                          field="Father's Email ID"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.gaurdian_name}
                          field="Guardian Name"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.gaurdian_qualification}
                          field="Guardian Qualification"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.gaurdian_occupation}
                          field="Guardian Occupation"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.gaurdian_office_address}
                          field="Guardian Office Address"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.gaurdian_annual_income}
                          field="Guardian Annual Income"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.gaurdian_mob_no}
                          field="Guardian Mobile No."
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.gaurdian_email}
                          field="Guardian Email ID"
                        />
                      );
                    })}
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Mother's Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.mother_name} field="Mother's Name" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.mother_qualification}
                          field="Mother's Qualification"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.mother_occupation}
                          field="Mother's Occupation"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.mother_office_address}
                          field="Mother's Office Address"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.mother_annual_income}
                          field="Mother's Annual Income"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.mother_mob_no}
                          field="Mother's Mobile No."
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.mother_email}
                          field="Mother's Email ID"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.no_of_sibilings}
                          field="No. of Sibilings"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.qualification_sibilings}
                          field="Qualification Of Sibilings"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.occupation_sibilings}
                          field="Occupation"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.alumni_licet_loyola_yn}
                          field="Alumni of LICET or LOYOLA"
                        />
                      );
                    })}
                  </Tr>
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
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.application_no}
                          field="Application No."
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.date_of_ad}
                          field="Date Of Admission"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.quota} field="Quota" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.regular_lateral_rl}
                          field="Regular / Lateral Entry"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.dayschl_hosteller_dh}
                          field="Day Scholar / Hosteller"
                        />
                      );
                    })}
                  </Tr>
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
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.scholarship_name}
                          field="Scholarship Name"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.scholarship_amount}
                          field="Scholarship Amount"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.first_graduate_yn}
                          field="First Graduate"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.eco_backward_yn}
                          field="Economically Backward ( Annual Income of Parents Less than 1LPA )"
                        />
                      );
                    })}
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Technical and Non-Technical Skills
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.programming_languages}
                          field="Programming Languages"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.software_proficiency}
                          field="Software Proficieny"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.dept_related_proficiency}
                          field="Department Related Skills"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.certifications}
                          field="Certifications"
                        />
                      );
                    })}
                  </Tr>

                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.other_skills}
                          field="Other Technical Skills"
                        />
                      );
                    })}
                  </Tr>

                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.apptitude_analytical_skills}
                          field="Aptitude / Analytical Skills"
                        />
                      );
                    })}
                  </Tr>

                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.communication_skills}
                          field="Communication Skills"
                        />
                      );
                    })}
                  </Tr>

                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.social_media_exposure}
                          field="Social Media Exposure"
                        />
                      );
                    })}
                  </Tr>

                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.leadership_skills}
                          field="Leadership Skills"
                        />
                      );
                    })}
                  </Tr>

                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.other_interpersonal_skills}
                          field="Other Interpersonal Skills"
                        />
                      );
                    })}
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Goals and Professional Membership
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.short_term_goal}
                          field="Short Term Goals"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.long_term_goal}
                          field="Long Term Goals"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.Professional_membership_name}
                          field="Membership Name"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.membership_no}
                          field="Membership No."
                        />
                      );
                    })}
                  </Tr>

                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.membership_duration}
                          field="Membership Duration"
                        />
                      );
                    })}
                  </Tr>
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
