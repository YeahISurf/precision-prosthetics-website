import { Box, Heading, Text, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function SectionHeading({ title, subtitle, centered = true, dark = false }) {
  return (
    <Box mb={10} textAlign={centered ? 'center' : 'left'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Heading
          as="h2"
          size={['xl', '2xl']}
          fontWeight="semibold"
          color={dark ? 'white' : 'neutral.800'}
          letterSpacing="tight"
          mb={subtitle ? 4 : 2}
        >
          {title}
        </Heading>
        
        {subtitle && (
          <Text
            fontSize={['lg', 'xl']}
            color={dark ? 'whiteAlpha.800' : 'neutral.600'}
            maxW={centered ? '700px' : 'none'}
            mx={centered ? 'auto' : 0}
            lineHeight="1.7"
          >
            {subtitle}
          </Text>
        )}
        
        <Divider
          width={centered ? '120px' : '80px'}
          borderColor="brand.500"
          borderWidth="3px"
          opacity="1"
          mt={4}
          mx={centered ? 'auto' : 0}
        />
      </motion.div>
    </Box>
  );
}

export default SectionHeading;
