import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function PremiumCard({ title, description, image, icon }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <Box
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
        bg="white"
        position="relative"
        height="100%"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          bgGradient: 'linear(to-r, brand.400, accent.400)',
          zIndex: 1,
        }}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            height="220px"
            width="100%"
            objectFit="cover"
          />
        )}
        <Box p={6}>
          {icon && (
            <Flex
              align="center"
              justify="center"
              bg="brand.500"
              color="white"
              boxSize="50px"
              borderRadius="full"
              mb={4}
            >
              {icon}
            </Flex>
          )}
          <Heading as="h3" size="md" mb={2} fontWeight="600">
            {title}
          </Heading>
          <Text color="neutral.600">{description}</Text>
        </Box>
      </Box>
    </motion.div>
  );
}

export default PremiumCard;
