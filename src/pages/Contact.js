import { Box, Heading, Text, Grid } from '@chakra-ui/react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <Box p={['6', '8']} maxW="1200px" mx="auto">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Get in Touch
      </Heading>
      <Text mb={8} textAlign="center">
        We'd love to hear from you. Please fill out the form below or contact us directly.
      </Text>
      <Grid templateColumns={['1fr', '1fr 1fr']} gap={8}>
        <ContactForm />
        <Box>
          <Heading as="h2" size="md" mb={4}>Contact Information</Heading>
          <Text mb={2}><strong>Address:</strong> 123 Main St, Suite 100, City, State, ZIP</Text>
          <Text mb={2}><strong>Phone:</strong> (123) 456-7890</Text>
          <Text mb={2}><strong>Email:</strong> info@precisionprosthetics.com</Text>
          {/* Add Google Maps embed here if desired */}
        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;
