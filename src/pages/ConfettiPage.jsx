import React, { useState } from "react";
import Confetti from "react-confetti";
import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar.jsx";

const ConfettiPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfettiClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts for 3 seconds
  };

  return (
    <Box>
      <NavigationBar />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" mb={4}>Celebrate with Confetti!</Heading>
          <Button colorScheme="teal" size="lg" onClick={handleConfettiClick}>Click Me!</Button>
          {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </VStack>
      </Container>
    </Box>
  );
};

export default ConfettiPage;