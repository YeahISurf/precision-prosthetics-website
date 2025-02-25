import { Box, Flex, Text, Image, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function PremiumTestimonial({ testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        bg="white"
        p={8}
        boxShadow="0 5px 20px rgba(0, 0, 0, 0.08)"
        borderRadius="xl"
        position="relative"
      >
        <Flex mb={6}>
          {[...Array(5)].map((_, i) => (
            <Icon as={FaStar} key={i} color="yellow.400" mr={1} boxSize={4} />
          ))}
        </Flex>

        <Icon
          as={FaQuoteLeft}
          position="absolute"
          top={5}
          right={5}
          color="brand.100"
          boxSize={8}
          opacity={0.4}
        />

        <Text fontSize="lg" fontStyle="italic" mb={6} color="neutral.700" lineHeight="1.8">
          "{testimonial.quote}"
        </Text>

        <Flex align="center">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            boxSize="60px"
            borderRadius="full"
            mr={4}
            objectFit="cover"
          />
          <Box>
            <Text fontWeight="bold" color="neutral.800">{testimonial.name}</Text>
            {testimonial.title && (
              <Text fontSize="sm" color="neutral.600">{testimonial.title}</Text>
            )}
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}

export default PremiumTestimonial;
