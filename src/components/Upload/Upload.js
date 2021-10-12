import React, { useState, useEffect } from "react";

// Chakra imports
import {
  Flex,
  SimpleGrid,
  Button,
  useDisclosure,
  Collapse,
  Box,
  Input,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function Upload() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card>
        <CardBody>
          <Button
            onClick={onToggle}
            colorScheme="orange"
            variant="solid"
            width="100%"
          >
            Upload
          </Button>
        </CardBody>
      </Card>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="orange.300"
          rounded="md"
          shadow="md"
        >
          <Input type="file" />
        </Box>
      </Collapse>
    </Flex>
  );
}

export default Upload;
