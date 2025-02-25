import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Image,
  Button,
  Stack,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaCheck, FaMedal, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';

import PageContainer from '../components/PageContainer';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import FeatureWithIcon from '../components/FeatureWithIcon';

function About() {
  return (
    <PageContainer noTopPadding={true}>
      {/* Hero Section */}
      <HeroSection
        title="About Precision Prosthetics"
        subtitle="Learn about our mission, our values, and the dedicated team behind our innovative prosthetic solutions."
        backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        height="60vh"
      />

      {/* Company Overview Section */}
      <Box py={16} position="relative" overflow="hidden">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box position="relative">
                <Box
                  position="absolute"
                  width="200px"
                  height="200px"
                  bg="brand.50"
                  borderRadius="full"
                  top="-20px"
                  left="-30px"
                  zIndex={-1}
                />
                <Image
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Our Team"
                  borderRadius="xl"
                  boxShadow="xl"
                  w="full"
                />
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box>
                <Text
                  color="brand.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="sm"
                  textTransform="uppercase"
                  mb={2}
                >
                  Our Story
                </Text>
                <Text
                  fontSize={['2xl', '3xl']}
                  fontWeight="bold"
                  lineHeight="shorter"
                  mb={6}
                >
                  Innovation and Compassion Since 2020
                </Text>
                <Text fontSize="lg" mb={6} color="neutral.600">
                  Founded in 2020, Precision Prosthetics is dedicated to providing the highest quality
                  prosthetic and orthotic care. Our team of experts uses the latest technology and
                  techniques to create solutions that are tailored to each individual's needs.
                </Text>
                <Text fontSize="lg" mb={6} color="neutral.600">
                  What began as a small practice has grown into a leading provider of advanced
                  prosthetic solutions, serving hundreds of patients across the region. Our
                  commitment to excellence and innovation drives everything we do.
                </Text>

                <Stack spacing={3} mb={8}>
                  <CheckItem text="State-of-the-art facilities and equipment" />
                  <CheckItem text="Team of certified prosthetic specialists" />
                  <CheckItem text="Personalized care plans for every patient" />
                  <CheckItem text="Ongoing support and adjustments" />
                </Stack>

                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  colorScheme="brand"
                  px={8}
                >
                  Contact Us
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Container>
      </Box>

      {/* Mission and Values Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="Guided by a clear mission and strong values, we strive to make a positive impact on our patients' lives every day."
          />

          <Box mb={16}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                textAlign="center"
                maxW="3xl"
                mx="auto"
              >
                <Text
                  fontSize={['xl', '2xl']}
                  fontWeight="medium"
                  fontStyle="italic"
                  color="neutral.700"
                  lineHeight="1.6"
                >
                  "To empower individuals with limb loss or mobility challenges to live their lives
                  to the fullest through innovative prosthetic and orthotic solutions."
                </Text>
              </Box>
            </motion.div>
          </Box>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
            <ValueCard
              title="Excellence"
              description="We strive for the highest standards in everything we do, from the quality of our prosthetics to the care we provide."
              icon={FaMedal}
              index={0}
            />

            <ValueCard
              title="Compassion"
              description="We care deeply about our patients and their journeys, providing support and understanding every step of the way."
              icon={FaHandHoldingHeart}
              index={1}
            />

            <ValueCard
              title="Innovation"
              description="We stay at the forefront of prosthetic technology, constantly seeking new ways to improve our patients' mobility and quality of life."
              icon={FaLightbulb}
              index={2}
            />
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box py={16}>
        <Container maxW="container.xl">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our experienced professionals are dedicated to providing exceptional care and innovative solutions."
          />

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
            <TeamMember
              name="Dr. Emily Carter"
              title="Lead Prosthetist"
              bio="With over 15 years of experience, Dr. Carter is a pioneer in prosthetic design and patient care."
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              index={0}
            />

            <TeamMember
              name="Mark Thompson"
              title="Rehabilitation Specialist"
              bio="Mark specializes in helping patients adapt to their new prosthetics and achieve their mobility goals."
              image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              index={1}
            />

            <TeamMember
              name="Dr. Sarah Johnson"
              title="Orthotic Specialist"
              bio="Dr. Johnson brings expertise in creating customized orthotic solutions for patients with diverse needs."
              image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              index={2}
            />

            <TeamMember
              name="James Wilson"
              title="Prosthetic Technician"
              bio="James combines technical precision with an artistic eye to create prosthetics that look and feel natural."
              image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              index={3}
            />

            <TeamMember
              name="Lisa Chen"
              title="Patient Care Coordinator"
              bio="Lisa ensures a seamless experience for our patients, from initial consultation to ongoing care."
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              index={4}
            />

            <TeamMember
              name="Dr. Michael Rodriguez"
              title="Research & Development"
              bio="Dr. Rodriguez leads our R&D efforts, exploring new technologies to advance prosthetic solutions."
              image="https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              index={5}
            />
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
}

// CheckItem Component
function CheckItem({ text }) {
  return (
    <Flex align="center">
      <Icon as={FaCheck} color="green.500" mr={3} />
      <Text color="neutral.700">{text}</Text>
    </Flex>
  );
}

// ValueCard Component
function ValueCard({ title, description, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="md"
        height="100%"
      >
        <Flex
          align="center"
          justify="center"
          bg="brand.50"
          color="brand.500"
          boxSize="80px"
          borderRadius="full"
          mb={4}
        >
          <Icon as={icon} boxSize="40px" />
        </Flex>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Divider width="50px" borderColor="brand.500" borderWidth="2px" opacity="1" my={3} />
        <Text color="neutral.600">{description}</Text>
      </Flex>
    </motion.div>
  );
}

// TeamMember Component
function TeamMember({ name, title, bio, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box borderRadius="xl" overflow="hidden" boxShadow="lg" bg="white" height="100%">
        <Box height="300px" overflow="hidden">
          <Image
            src={image}
            alt={name}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </Box>
        <Box p={6}>
          <Text fontSize="xl" fontWeight="bold" mb={1}>
            {name}
          </Text>
          <Text fontSize="md" color="brand.500" fontWeight="medium" mb={3}>
            {title}
          </Text>
          <Text color="neutral.600">{bio}</Text>
        </Box>
      </Box>
    </motion.div>
  );
}

export default About;
