import { Box, Heading, Text, Button, Flex, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import BlogPost from '../components/BlogPost';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { blogPosts } from '../data/blogPosts';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Box
          textAlign="center"
          py={['10', '20']}
          bg="gray.100"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgImage: 'url("https://source.unsplash.com/random/1600x900/?prosthetic")',
            bgSize: 'cover',
            bgPosition: 'center',
            filter: 'brightness(0.7)',
            zIndex: -1,
          }}
        >
          <Heading as="h1" size={['xl', '2xl']} color="white" mb={4}>
            Advanced Prosthetic Solutions for a Better Tomorrow
          </Heading>
          <Text fontSize={['lg', 'xl']} color="white" mb={6} maxW="800px" mx="auto">
            At Precision Prosthetics, we combine cutting-edge technology with compassionate care to provide personalized prosthetic and orthotic solutions.
          </Text>
          <Flex justify="center" gap={4}>
            <Button as={RouterLink} to="/services" colorScheme="blue" size="lg">
              Discover Our Services
            </Button>
            <Button as={RouterLink} to="/contact" colorScheme="green" size="lg">
              Get in Touch
            </Button>
          </Flex>
        </Box>
      </motion.div>
      <Box p={['6', '8']} maxW="1200px" mx="auto">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Our Expertise
        </Heading>
        <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap={6}>
          {services.slice(0, 3).map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Grid>
      </Box>
      <Box p={['6', '8']} bg="gray.50">
        <Box maxW="1200px" mx="auto">
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            What Our Patients Say
          </Heading>
          <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap={6}>
            {testimonials.slice(0, 3).map(testimonial => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </Grid>
        </Box>
      </Box>
      <Box p={['6', '8']} maxW="1200px" mx="auto">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Latest News
        </Heading>
        <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap={6}>
          {blogPosts.slice(0, 3).map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
