import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Logo</Box>
        <Flex alignItems={"center"}>
          <Button as={Link} to="/" variant={"link"} mr={4}>
            Home
          </Button>
          <Button as={Link} to="/confetti" variant={"link"} mr={4}>
            Confetti
          </Button>
          <Button as={Link} to="/pride-lending-graphs" variant={"link"} mr={4}>
            Pride Lending Graphs
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;