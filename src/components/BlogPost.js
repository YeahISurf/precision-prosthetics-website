import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

function BlogPost({ post }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} bg="white">
        <Heading as="h3" size="md" mb={2}>{post.title}</Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
        <Text mb={4}>{post.excerpt}</Text>
        <Button as={RouterLink} to={`/blog/${post.id}`} colorScheme="blue">Read More</Button>
      </Box>
    </motion.div>
  );
}

export default BlogPost;
