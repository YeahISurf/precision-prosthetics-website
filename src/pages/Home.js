import {
  Box,
  Container,
  Grid,
  Flex,
  Text,
  Button,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaClipboardCheck, FaHeartbeat, FaTools, FaChartLine } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import PageContainer from '../components/PageContainer';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import PremiumCard from '../components/PremiumCard';
import PremiumTestimonial from '../components/PremiumTestimonial';
import FeatureWithIcon from '../components/FeatureWithIcon';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

function Home() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <PageContainer noTopPadding={true}>
      {/* Hero Section */}
      <HeroSection
        title="Advanced Prosthetic Solutions for a Better Tomorrow"
        subtitle="Combining cutting-edge technology with compassionate care to provide personalized prosthetic and orthotic solutions that empower lives."
        ctaText="Discover Our Services"
        ctaLink="/services"
        secondaryCtaText="Get In Touch"
        secondaryCtaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        height="90vh"
      />

      {/* Key Features Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="At Precision Prosthetics, we blend state-of-the-art technology with personalized care to deliver exceptional results."
          />

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10}>
            <FeatureWithIcon
              title="Customized Solutions"
              description="Every prosthetic and orthotic solution is tailored to meet your unique needs, ensuring optimal comfort and functionality."
              icon={FaClipboardCheck}
              index={0}
            />

            <FeatureWithIcon
              title="Compassionate Care"
              description="Our team of experts provides supportive care throughout your journey, from initial consultation to ongoing adjustments."
              icon={FaHeartbeat}
              index={1}
            />

            <FeatureWithIcon
              title="Advanced Technology"
              description="We utilize the latest innovations in prosthetic design and materials to create solutions that enhance your mobility and quality of life."
              icon={FaTools}
              index={2}
            />

            <FeatureWithIcon
              title="Proven Results"
              description="Our track record of success speaks for itself, with countless patients achieving improved mobility and independence."
              icon={FaChartLine}
              index={3}
            />
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SectionHeading
            title="Our Expertise"
            subtitle="Explore our comprehensive range of prosthetic and orthotic services designed to meet your specific needs."
          />

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
              >
                <PremiumCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </motion.div>
            ))}
          </Grid>

          <Flex justify="center" mt={12}>
            <Button
              as={RouterLink}
              to="/services"
              size="lg"
              colorScheme="brand"
              rightIcon={<ArrowForwardIcon />}
            >
              View All Services
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={20} bg="brand.500" color="white">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={8}
            textAlign="center"
          >
            <StatCard number="500+" label="Satisfied Patients" />
            <StatCard number="15+" label="Years of Experience" />
            <StatCard number="98%" label="Success Rate" />
            <StatCard number="24/7" label="Patient Support" />
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SectionHeading
            title="What Our Patients Say"
            subtitle="Hear from individuals whose lives have been transformed by our prosthetic and orthotic solutions."
          />

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
              >
                <PremiumTestimonial testimonial={testimonial} />
              </motion.div>
            ))}
          </Grid>

          <Flex justify="center" mt={12}>
            <Button
              as={RouterLink}
              to="/testimonials"
              size="lg"
              colorScheme="brand"
              rightIcon={<ArrowForwardIcon />}
            >
              Read More Stories
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} position="relative" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgImage="url('https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
          bgSize="cover"
          bgPosition="center"
          filter="brightness(0.4)"
          zIndex={-1}
        />

        <Container maxW="container.lg" position="relative" zIndex={1}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              color="white"
            >
              <Text
                fontSize={['xl', '2xl']}
                fontWeight="light"
                letterSpacing="wider"
                mb={3}
              >
                TAKE THE FIRST STEP
              </Text>
              <Text
                fontSize={['3xl', '4xl', '5xl']}
                fontWeight="bold"
                lineHeight="1.2"
                mb={6}
                maxW="900px"
              >
                Ready to Discover What's Possible? Schedule Your Consultation Today
              </Text>
              <Text fontSize={['lg', 'xl']} maxW="800px" mb={10} color="whiteAlpha.900">
                Our team of experts is ready to help you find the perfect prosthetic or orthotic
                solution tailored to your unique needs.
              </Text>

              <Stack direction={['column', 'row']} spacing={5}>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  colorScheme="brand"
                  px={8}
                  fontSize="lg"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  as={RouterLink}
                  to="/about"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  px={8}
                  fontSize="lg"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Learn More About Us
                </Button>
              </Stack>
            </Flex>
          </motion.div>
        </Container>
      </Box>
    </PageContainer>
  );
}

// Stat Card Component
function StatCard({ number, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Flex direction="column" align="center">
        <Text
          fontSize={['4xl', '5xl', '6xl']}
          fontWeight="bold"
          bgGradient="linear(to-r, white, whiteAlpha.800)"
          bgClip="text"
          mb={2}
        >
          {number}
        </Text>
        <Text fontSize="lg" fontWeight="medium" color="whiteAlpha.900">
          {label}
        </Text>
      </Flex>
    </motion.div>
  );
}

export default Home;
