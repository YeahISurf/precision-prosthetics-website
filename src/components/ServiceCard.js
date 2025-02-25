import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} bg="white">
        <Image src={service.image} alt={service.title} mb={4} />
        <Heading as="h3" size="md" mb={2}>{service.title}</Heading>
        <Text>{service.description}</Text>
      </Box>
    </motion.div>
  );
}

export default ServiceCard;
