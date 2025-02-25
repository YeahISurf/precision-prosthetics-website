import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden" 
        boxShadow="md" 
        bg="white"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box height="220px" overflow="hidden">
          <Image 
            src={product.image} 
            alt={product.name} 
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </Box>
        <Box p={6} flex="1" display="flex" flexDirection="column">
          <Text fontSize="sm" color="brand.500" fontWeight="semibold" mb={1}>
            {product.category}
          </Text>
          <Heading as="h3" size="md" mb={2}>
            {product.name}
          </Heading>
          <Text mb={4} flex="1">
            {product.description}
          </Text>
          <Button 
            as={RouterLink} 
            to="/contact" 
            colorScheme="brand"
            mt="auto"
          >
            Request Consultation
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ProductCard;
