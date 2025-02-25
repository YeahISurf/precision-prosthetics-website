import { Box, Heading, Grid, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';

function Services() {
  return (
    <PageContainer>
      <Box py={16}>
        <Container maxW="container.xl">
          <SectionHeading
            title="Our Services"
            subtitle="Explore our comprehensive range of prosthetic and orthotic services designed to meet your specific needs."
          />
          
          <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={8} mt={10}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard key={service.id} service={service} />
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
}

export default Services;
