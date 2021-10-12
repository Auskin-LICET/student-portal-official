import {
  Avatar,
  Badge,
  Button,
  Flex,
  FormControl,
  Input,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function FeedbackTablerow(props) {
  const { row1 } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "300px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <FormControl>
                <Input
                  borderRadius="5px"
                  fontSize="sm"
                  type="text"
                  placeholder="Hi"
                />
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  );
}

export default FeedbackTablerow;
