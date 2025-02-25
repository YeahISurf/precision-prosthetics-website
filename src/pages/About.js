import { Box, Heading, Text, Grid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function About() {
  return (
    <Box p={['6', '8']} maxW="1200px" mx="auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          About Precision Prosthetics
        </Heading>
        <Text mb={8} fontSize="lg">
          Founded in 2020, Precision Prosthetics is dedicated to providing the highest quality prosthetic and orthotic care. Our team of experts uses the latest technology and techniques to create solutions that are tailored to each individual's needs.
        </Text>
      </motion.div>
      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4}>Our Mission</Heading>
        <Text fontSize="lg">
          To empower individuals with limb loss or mobility challenges to live their lives to the fullest through innovative prosthetic and orthotic solutions.
        </Text>
      </Box>
      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4}>Our Values</Heading>
        <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap={6}>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Text fontWeight="bold" mb={2}>Innovation</Text>
            <Text>We stay at the forefront of prosthetic technology.</Text>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Text fontWeight="bold" mb={2}>Compassion</Text>
            <Text>We care deeply about our patients and their journeys.</Text>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Text fontWeight="bold" mb={2}>Excellence</Text>
            <Text>We strive for the highest standards in everything we do.</Text>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Heading as="h2" size="lg" mb={4}>Our Team</Heading>
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={6}>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Image src="https://source.unsplash.com/random/400x300/?doctor-woman" alt="Dr. Emily Carter" mb={4} />
            <Text fontWeight="bold">Dr. Emily Carter, Lead Prosthetist</Text>
            <Text>With over 15 years of experience, Dr. Carter is a pioneer in prosthetic design.</Text>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Image src="https://source.unsplash.com/random/400x300/?doctor-man" alt="Mark Thompson" mb={4} />
            <Text fontWeight="bold">Mark Thompson, Rehabilitation Specialist</Text>
            <Text>Mark specializes in helping patients adapt to their new prosthetics.</Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
