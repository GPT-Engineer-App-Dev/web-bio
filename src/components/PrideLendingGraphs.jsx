import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const PrideLendingGraphs = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Loans Given',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Interest Rate',
        data: [2, 3, 2.5, 3.5, 4, 3.8],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const pieData = {
    labels: ['Personal Loans', 'Home Loans', 'Auto Loans'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Pride Lending Statistics</Heading>
      <Box mb={8}>
        <Heading as="h3" size="md" mb={2}>Loans Given Over Time</Heading>
        <Bar data={barData} />
      </Box>
      <Box mb={8}>
        <Heading as="h3" size="md" mb={2}>Interest Rate Over Time</Heading>
        <Line data={lineData} />
      </Box>
      <Box mb={8}>
        <Heading as="h3" size="md" mb={2}>Loan Types Distribution</Heading>
        <Pie data={pieData} />
      </Box>
    </Box>
  );
};

export default PrideLendingGraphs;