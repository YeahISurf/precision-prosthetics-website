import { Box, Container, Grid, Flex, Text, Icon, Link, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaQuestion, FaExternalLinkAlt } from 'react-icons/fa';
import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';

function Resources() {
  return (
    <PageContainer>
      <Box py={16}>
        <Container maxW="container.xl">
          <SectionHeading
            title="Resources for Patients and Families"
            subtitle="Access helpful information, downloadable materials, FAQs, and external resources to support your prosthetic journey."
          />
          
          {/* Downloadable Materials Section */}
          <Box mt={12} mb={16}>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              Downloadable Materials
            </Text>
            
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              <ResourceCard 
                title="Prosthetic Care Guide" 
                description="A comprehensive guide to caring for and maintaining your prosthetic device."
                icon={FaFileDownload}
                link="#"
                buttonText="Download PDF"
                index={0}
              />
              
              <ResourceCard 
                title="Orthotic Device Brochure" 
                description="Learn about our range of orthotic devices and how they can benefit you."
                icon={FaFileDownload}
                link="#"
                buttonText="Download PDF"
                index={1}
              />
              
              <ResourceCard 
                title="New Patient Information" 
                description="Essential information for new patients, including what to expect at your first appointment."
                icon={FaFileDownload}
                link="#"
                buttonText="Download PDF"
                index={2}
              />
            </Grid>
          </Box>
          
          {/* FAQs Section */}
          <Box mb={16}>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              Frequently Asked Questions
            </Text>
            
            <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={6}>
              <FaqItem 
                question="What is the process for getting a prosthetic?" 
                answer="The process begins with a consultation with our team, followed by an assessment, design, fitting, and ongoing support. Most patients can expect 2-4 visits over several weeks to complete the initial fitting process."
                index={0}
              />
              
              <FaqItem 
                question="How do I maintain my orthotic device?" 
                answer="Regular cleaning, inspections, and adjustments are recommended. Refer to our care guide for detailed instructions specific to your device. Most orthotic devices should be wiped clean daily and inspected weekly for signs of wear."
                index={1}
              />
              
              <FaqItem 
                question="Are your services covered by insurance?" 
                answer="Many of our services are covered by insurance. We work with most major insurance providers and can help you understand your coverage and obtain any necessary pre-authorizations before treatment begins."
                index={2}
              />
              
              <FaqItem 
                question="How long does it take to adjust to a new prosthetic?" 
                answer="Adjustment periods vary by individual, but most patients begin to feel comfortable with their new prosthetic within 2-4 weeks. Our rehabilitation specialists work closely with you to ensure a smooth transition and optimal comfort."
                index={3}
              />
            </Grid>
          </Box>
          
          {/* External Resources Section */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              External Resources
            </Text>
            
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              <ExternalResourceCard 
                title="American Orthotic & Prosthetic Association" 
                description="National professional organization representing the orthotic and prosthetic community."
                link="https://www.aopanet.org"
                index={0}
              />
              
              <ExternalResourceCard 
                title="Amputee Coalition" 
                description="National network for empowering those affected by limb loss to achieve their full potential."
                link="https://www.amputee-coalition.org"
                index={1}
              />
              
              <ExternalResourceCard 
                title="National Institute of Disability" 
                description="Federal government's principal agency for disability research and resources."
                link="https://www.nih.gov"
                index={2}
              />
            </Grid>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
}

// Resource Card Component
function ResourceCard({ title, description, icon, link, buttonText, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        p={6}
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Flex align="center" mb={4}>
          <Flex
            align="center"
            justify="center"
            bg="brand.50"
            color="brand.500"
            boxSize="50px"
            borderRadius="lg"
            mr={4}
          >
            <Icon as={icon} boxSize="24px" />
          </Flex>
          <Text fontSize="xl" fontWeight="bold">{title}</Text>
        </Flex>
        
        <Text color="gray.600" mb={5} flex="1">
          {description}
        </Text>
        
        <Button
          as={Link}
          href={link}
          colorScheme="brand"
          leftIcon={<Icon as={FaFileDownload} />}
          size="md"
          _hover={{ textDecoration: 'none' }}
          isExternal
        >
          {buttonText}
        </Button>
      </Box>
    </motion.div>
  );
}

// FAQ Item Component
function FaqItem({ question, answer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        p={6}
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        borderLeft="4px solid"
        borderColor="brand.500"
      >
        <Flex align="flex-start" mb={2}>
          <Icon as={FaQuestion} color="brand.500" mt={1} mr={3} />
          <Text fontWeight="bold" fontSize="lg">
            {question}
          </Text>
        </Flex>
        <Text color="gray.600" pl={7}>
          {answer}
        </Text>
      </Box>
    </motion.div>
  );
}

// External Resource Card Component
function ExternalResourceCard({ title, description, link, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        p={6}
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        height="100%"
        display="flex"
        flexDirection="column"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: 'translateY(-5px)',
          boxShadow: 'lg',
        }}
      >
        <Text fontSize="xl" fontWeight="bold" mb={3}>{title}</Text>
        <Text color="gray.600" mb={5} flex="1">
          {description}
        </Text>
        <Link 
          href={link} 
          isExternal 
          color="brand.500" 
          fontWeight="medium"
          display="flex"
          alignItems="center"
        >
          Visit Website <Icon as={FaExternalLinkAlt} boxSize="12px" ml={2} />
        </Link>
      </Box>
    </motion.div>
  );
}

export default Resources;
