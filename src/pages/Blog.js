import { Box, Heading, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data/blogPosts';

function Blog() {
  return (
    <Box p={['6', '8']} maxW="1200px" mx="auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Latest News and Insights
        </Heading>
      </motion.div>
      <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
        {blogPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </Grid>
    </Box>
  );
}

export default Blog;
