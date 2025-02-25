import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} bg="white">
        <Image src={product.image} alt={product.name} mb={4} />
        <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
        <Text mb={4}>{product.description}</Text>
        <Button as={RouterLink} to="/contact" colorScheme="blue">Request Consultation</Button>
      </Box>
    </motion.div>
  );
}

export default ProductCard;
