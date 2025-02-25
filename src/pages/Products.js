import { Box, Grid, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';

function Products() {
  return (
    <PageContainer>
      <Box py={16}>
        <Container maxW="container.xl">
          <SectionHeading
            title="Our Products"
            subtitle="Discover our range of cutting-edge prosthetic and orthotic devices designed for comfort, functionality, and improved quality of life."
          />
          
          <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={8} mt={10}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard key={product.id} product={product} />
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
}

export default Products;
