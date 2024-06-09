import React, { useState } from 'react';
import { Box, Button, Container, Heading } from '@chakra-ui/react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

const ConfettiPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfettiClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Confetti Page</Heading>
        <Button colorScheme="teal" size="lg" onClick={handleConfettiClick}>Show Confetti</Button>
        {showConfetti && <Confetti />}
      </Box>
      <Box mt={8}>
        <Button as={Link} to="/" colorScheme="teal" size="lg">Go to Home</Button>
      </Box>
    </Container>
  );
};

export default ConfettiPage;