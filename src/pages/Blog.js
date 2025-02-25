import { Box, Grid, Container, Image, Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';

function Blog() {
  return (
    <PageContainer>
      <Box py={16}>
        <Container maxW="container.xl">
          <SectionHeading
            title="Latest News and Insights"
            subtitle="Stay updated with the latest advancements in prosthetic technology, patient success stories, and helpful tips."
          />
          
          <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={8} mt={10}>
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
}

// Enhanced BlogPostCard component
function BlogPostCard({ post }) {
  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      height="100%"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: 'xl',
      }}
    >
      <Box height="220px" overflow="hidden">
        <Image
          src={post.image}
          alt={post.title}
          width="100%"
          height="100%"
          objectFit="cover"
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
      <Box p={6}>
        <Text fontSize="sm" color="brand.500" fontWeight="semibold" mb={2}>
          {post.date}
        </Text>
        <Heading as="h3" size="md" mb={3} lineHeight="1.4">
          {post.title}
        </Heading>
        <Text color="gray.600" mb={4} noOfLines={3}>
          {post.excerpt}
        </Text>
        <Flex justify="flex-end">
          <Text
            as={RouterLink}
            to={`/blog/${post.id}`}
            color="brand.500"
            fontWeight="medium"
            _hover={{ textDecoration: 'underline' }}
          >
            Read More →
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Blog;
