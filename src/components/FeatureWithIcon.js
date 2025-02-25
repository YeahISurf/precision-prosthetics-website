import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function FeatureWithIcon({ title, description, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Flex
        direction={['column', 'row']}
        align={['center', 'flex-start']}
        textAlign={['center', 'left']}
        mb={8}
      >
        <Flex
          align="center"
          justify="center"
          bg="brand.50"
          color="brand.500"
          boxSize="70px"
          borderRadius="xl"
          mr={[0, 5]}
          mb={[4, 0]}
        >
          <Icon as={icon} boxSize="30px" />
        </Flex>
        <Box>
          <Heading as="h3" size="md" mb={2} fontWeight="semibold">
            {title}
          </Heading>
          <Text color="neutral.600" lineHeight="1.7">
            {description}
          </Text>
        </Box>
      </Flex>
    </motion.div>
  );
}

export default FeatureWithIcon;
