import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Testimonial({ testimonial }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} bg="white">
        <Flex align="center" mb={4}>
          <Image src={testimonial.image} alt={testimonial.name} boxSize="50px" borderRadius="full" mr={4} />
          <Text fontWeight="bold">{testimonial.name}</Text>
        </Flex>
        <Text fontStyle="italic">"{testimonial.quote}"</Text>
      </Box>
    </motion.div>
  );
}

export default Testimonial;
