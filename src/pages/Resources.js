import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Resources() {
  return (
    <Box p={['6', '8']} maxW="1200px" mx="auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Resources for Patients and Families
        </Heading>
      </motion.div>
      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4}>Downloadable Materials</Heading>
        <Text mb={2}>
          <Link href="#" color="blue.500" isExternal>
            Prosthetic Care Guide (PDF)
          </Link>
        </Text>
        <Text>
          <Link href="#" color="blue.500" isExternal>
            Orthotic Device Brochure (PDF)
          </Link>
        </Text>
      </Box>
      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4}>Frequently Asked Questions</Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is the process for getting a prosthetic?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              The process begins with a consultation with our team, followed by an assessment, design, fitting, and ongoing support.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I maintain my orthotic device?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Regular cleaning, inspections, and adjustments are recommended. Refer to our care guide for detailed instructions.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Heading as="h2" size="lg" mb={4}>External Resources</Heading>
        <Text mb={2}>
          <Link href="https://www.oandp.org" color="blue.500" isExternal>
            American Orthotic & Prosthetic Association
          </Link>
        </Text>
        <Text>
          <Link href="https://amputee-coalition.org" color="blue.500" isExternal>
            Amputee Coalition
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Resources;
