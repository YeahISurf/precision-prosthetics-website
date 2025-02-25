import { Box, Grid, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PremiumTestimonial from '../components/PremiumTestimonial';
import { testimonials } from '../data/testimonials';
import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';

function Testimonials() {
  return (
    <PageContainer>
      <Box py={16}>
        <Container maxW="container.xl">
          <SectionHeading
            title="What Our Patients Say"
            subtitle="Hear directly from individuals whose lives have been transformed by our prosthetic and orthotic solutions."
          />
          
          <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={8} mt={10}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PremiumTestimonial testimonial={testimonial} />
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
}

export default Testimonials;
