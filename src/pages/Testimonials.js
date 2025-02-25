import { Box, Heading, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Testimonial from '../components/Testimonial';
import { testimonials } from '../data/testimonials';

function Testimonials() {
  return (
    <Box p={['6', '8']} maxW="1200px" mx="auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          What Our Patients Say
        </Heading>
      </motion.div>
      <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;
