import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function ServiceCard({ service }) {
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
        p={0} 
        bg="white"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box height="220px" overflow="hidden">
          <Image 
            src={service.image} 
            alt={service.title} 
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </Box>
        <Box p={6}>
          <Heading as="h3" size="md" mb={2}>
            {service.title}
          </Heading>
          <Text>
            {service.description}
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ServiceCard;
