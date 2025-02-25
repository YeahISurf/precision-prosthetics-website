import { Box, Heading, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

function Services() {
  return (
    <Box p={['6', '8']} maxW="1200px" mx="auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Our Services
        </Heading>
      </motion.div>
      <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
