import {
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Icon,
  Link,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaAngleRight, FaFileAlt, FaInfoCircle, FaQuestion } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';

function FAQ() {
  // Animation variants
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageContainer>
      <Box py={16}>
        <Container maxW="container.xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find comprehensive answers to all your questions about prosthetics, orthotics, and our services."
          />

          <Tabs colorScheme="brand" mt={10} isLazy>
            <TabList>
              <Tab fontWeight="medium">General Questions</Tab>
              <Tab fontWeight="medium">Prosthetic Services</Tab>
              <Tab fontWeight="medium">Orthotic Services</Tab>
              <Tab fontWeight="medium">Insurance & Billing</Tab>
              <Tab fontWeight="medium">Care & Maintenance</Tab>
            </TabList>

            <TabPanels>
              {/* General Questions */}
              <TabPanel>
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Accordion allowMultiple>
                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What is the process for getting a prosthetic device?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>The process typically involves several steps:</Text>
                          <Box ml={6} mt={2}>
                            <StepItem step="1" text="Initial Consultation: Meeting with our team to discuss your needs and goals." />
                            <StepItem step="2" text="Evaluation: Comprehensive assessment of your condition and requirements." />
                            <StepItem step="3" text="Prescription: Creating a detailed plan for your custom prosthetic." />
                            <StepItem step="4" text="Design & Manufacturing: Crafting your customized prosthetic device." />
                            <StepItem step="5" text="Fitting & Adjustments: Ensuring your prosthetic fits comfortably and functions properly." />
                            <StepItem step="6" text="Training: Learning how to use and care for your new prosthetic." />
                            <StepItem step="7" text="Follow-up Care: Ongoing support and adjustments as needed." />
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              How long does it take to adjust to a new prosthetic device?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            The adjustment period varies for each individual. Most patients begin to feel comfortable with their new prosthetic within 2-4 weeks, but full adaptation can take several months. Factors that influence the adjustment period include:
                          </Text>
                          <Box ml={6} mt={3}>
                            <Text>• Type and complexity of the prosthetic device</Text>
                            <Text>• Your physical condition and health status</Text>
                            <Text>• Level of amputation or disability</Text>
                            <Text>• Frequency and intensity of therapy and training</Text>
                            <Text>• Your motivation and engagement in the rehabilitation process</Text>
                          </Box>
                          <Text mt={3}>
                            Our rehabilitation specialists work closely with you throughout this period to ensure a smooth transition and successful adaptation to your new prosthetic device.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What should I bring to my first appointment?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>For your first appointment, please bring the following items:</Text>
                          <Box ml={6} mt={2}>
                            <Text>• Photo identification</Text>
                            <Text>• Insurance card and information</Text>
                            <Text>• Referral from your physician (if applicable)</Text>
                            <Text>• Medical history and records related to your condition</Text>
                            <Text>• List of current medications</Text>
                            <Text>• Comfortable clothing that allows access to the affected area</Text>
                            <Text>• Current prosthetic or orthotic devices (if you have any)</Text>
                            <Text>• Appropriate footwear (for lower limb assessments)</Text>
                            <Text>• A list of questions or concerns you'd like to discuss</Text>
                          </Box>
                          <Text mt={3}>
                            If you have any questions about what to bring, please contact our office before your appointment.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              Do you offer emergency services or repairs?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Yes, we understand that issues with prosthetic and orthotic devices can significantly impact your daily life. We offer expedited repair services for urgent situations and can often accommodate same-day or next-day appointments for emergency cases.
                          </Text>
                          <Text mt={3}>
                            For emergency situations during regular business hours, please call our main office line. For after-hours emergencies, we have an on-call service that can connect you with a specialist if needed.
                          </Text>
                          <Text mt={3}>
                            We also provide temporary solutions or loaner devices in some cases while more extensive repairs are being completed, ensuring you maintain your mobility and independence.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What qualifications do your practitioners have?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Our team consists of certified prosthetists and orthotists who have completed extensive education and clinical training. All our practitioners hold the following qualifications:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text>• Graduate-level education in prosthetics and orthotics</Text>
                            <Text>• Certification from the American Board for Certification in Orthotics, Prosthetics & Pedorthics (ABC) or the Board of Certification/Accreditation (BOC)</Text>
                            <Text>• State licensure where required</Text>
                            <Text>• Ongoing continuing education to stay current with the latest techniques and technologies</Text>
                          </Box>
                          <Text mt={3}>
                            Many of our specialists also hold additional certifications in specialized areas such as pediatric care, sports prosthetics, and advanced myoelectric systems. Our team includes professionals with backgrounds in biomedical engineering, physical therapy, and rehabilitation science, providing a multidisciplinary approach to your care.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>
                  </Accordion>
                </motion.div>
              </TabPanel>

              {/* Prosthetic Services */}
              <TabPanel>
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Accordion allowMultiple>
                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What types of prosthetic devices do you offer?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>We offer a comprehensive range of prosthetic solutions, including:</Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">Upper Limb Prosthetics:</Text>
                            <Text ml={4}>• Myoelectric prostheses that use muscle signals to control movement</Text>
                            <Text ml={4}>• Body-powered prostheses operated by harness systems</Text>
                            <Text ml={4}>• Passive or cosmetic prostheses designed for natural appearance</Text>
                            <Text ml={4}>• Activity-specific prostheses for sports or specialized tasks</Text>
                            
                            <Text fontWeight="medium" mt={3}>Lower Limb Prosthetics:</Text>
                            <Text ml={4}>• Microprocessor knees that adapt to different walking patterns</Text>
                            <Text ml={4}>• Energy-storing feet for more natural gait and reduced fatigue</Text>
                            <Text ml={4}>• Hydraulic ankles for improved terrain adaptation</Text>
                            <Text ml={4}>• Specialized prosthetics for running, swimming, and other sports</Text>
                            
                            <Text fontWeight="medium" mt={3}>Specialized Solutions:</Text>
                            <Text ml={4}>• Pediatric prosthetics designed to grow with children</Text>
                            <Text ml={4}>• Waterproof prosthetics for aquatic activities</Text>
                            <Text ml={4}>• High-tech prosthetics with advanced sensors and connectivity</Text>
                            <Text ml={4}>• Partial foot and finger prosthetics</Text>
                          </Box>
                          <Text mt={3}>
                            Our prosthetic specialists will assess your specific needs, lifestyle, and goals to recommend the most appropriate options for you.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              How long do prosthetic devices typically last?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            The lifespan of a prosthetic device varies depending on several factors, including the type of prosthetic, usage patterns, and proper maintenance. On average:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text>• Prosthetic sockets typically last 3-5 years for adults</Text>
                            <Text>• For growing children, sockets may need replacement every 12-18 months</Text>
                            <Text>• Prosthetic components (feet, knees, hands) often last 3-5 years</Text>
                            <Text>• Soft components like liners and suspension systems usually need replacement every 6-12 months</Text>
                          </Box>
                          <Text mt={3}>
                            Factors that affect longevity include changes in body weight, activity level, and proper maintenance. Regular check-ups allow us to assess wear and tear and address issues before they become problems. Most insurance plans, including Medicare, typically cover replacement prosthetics when medically necessary.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What's the difference between myoelectric and body-powered prosthetics?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text fontWeight="medium">Myoelectric Prosthetics:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Use sensors to detect muscle contractions in the residual limb</Text>
                            <Text>• Convert these signals into electrical commands that control motors in the prosthetic</Text>
                            <Text>• Provide more natural movement and appearance</Text>
                            <Text>• Offer greater grip strength and precision for fine motor tasks</Text>
                            <Text>• Don't require harness systems, allowing greater range of motion</Text>
                            <Text>• Typically heavier and more expensive than body-powered options</Text>
                            <Text>• Require battery power and are sensitive to moisture/extreme conditions</Text>
                          </Box>
                          
                          <Text fontWeight="medium" mt={4}>Body-Powered Prosthetics:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Operate using a harness and cable system controlled by body movements</Text>
                            <Text>• Provide direct control and tactile feedback through the cable system</Text>
                            <Text>• More durable and resistant to harsh environments</Text>
                            <Text>• Lighter weight and more affordable than myoelectric options</Text>
                            <Text>• Require no batteries or electronic components</Text>
                            <Text>• Simpler to maintain and repair</Text>
                            <Text>• May require more physical effort and have a less natural appearance</Text>
                          </Box>
                          
                          <Text mt={3}>
                            The choice between these options depends on your specific needs, lifestyle, occupation, and personal preferences. Our specialists will help you understand the advantages and limitations of each type to make the best decision for your situation.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              Can I participate in sports and other activities with a prosthetic?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Absolutely! Many people with prosthetic devices lead highly active lives and participate in a wide range of sports and recreational activities. Modern prosthetics are designed to accommodate various activity levels, and specialized prosthetics are available for specific sports and activities.
                          </Text>
                          <Text mt={3}>
                            Popular activities among prosthetic users include:
                          </Text>
                          <Box ml={6} mt={1}>
                            <Text>• Running and jogging (with specialized running blades)</Text>
                            <Text>• Swimming (with waterproof prosthetics)</Text>
                            <Text>• Cycling</Text>
                            <Text>• Hiking and mountain climbing</Text>
                            <Text>• Golf</Text>
                            <Text>• Team sports like basketball, volleyball, and softball</Text>
                            <Text>• Winter sports like skiing and snowboarding</Text>
                          </Box>
                          <Text mt={3}>
                            Our team can help you select the right prosthetic configuration for your desired activities and provide guidance on techniques and adaptations to help you succeed. We also offer specialized activity-specific prosthetics and components that can be interchanged depending on the activity you're participating in.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>
                  </Accordion>
                </motion.div>
              </TabPanel>

              {/* Orthotic Services */}
              <TabPanel>
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Accordion allowMultiple>
                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What conditions do orthotic devices treat?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>Orthotic devices are designed to treat a wide range of conditions, including:</Text>
                          
                          <Text fontWeight="medium" mt={3}>Foot and Ankle Conditions:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Plantar fasciitis</Text>
                            <Text>• Flat feet (pes planus)</Text>
                            <Text>• High arches (pes cavus)</Text>
                            <Text>• Ankle instability</Text>
                            <Text>• Foot drop</Text>
                            <Text>• Diabetic foot complications</Text>
                          </Box>
                          
                          <Text fontWeight="medium" mt={3}>Knee and Hip Conditions:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Osteoarthritis</Text>
                            <Text>• Knee instability</Text>
                            <Text>• Ligament injuries (ACL, MCL)</Text>
                            <Text>• Post-surgical rehabilitation</Text>
                            <Text>• Genu valgum (knock knees) or Genu varum (bow legs)</Text>
                          </Box>
                          
                          <Text fontWeight="medium" mt={3}>Spinal Conditions:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Scoliosis</Text>
                            <Text>• Lordosis</Text>
                            <Text>• Kyphosis</Text>
                            <Text>• Lower back pain</Text>
                            <Text>• Herniated discs</Text>
                            <Text>• Spinal stenosis</Text>
                          </Box>
                          
                          <Text fontWeight="medium" mt={3}>Upper Extremity Conditions:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Carpal tunnel syndrome</Text>
                            <Text>• Tennis elbow</Text>
                            <Text>• Wrist sprains</Text>
                            <Text>• Shoulder instability</Text>
                          </Box>
                          
                          <Text fontWeight="medium" mt={3}>Neurological Conditions:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Stroke</Text>
                            <Text>• Cerebral palsy</Text>
                            <Text>• Multiple sclerosis</Text>
                            <Text>• Muscular dystrophy</Text>
                          </Box>
                          
                          <Text mt={3}>
                            Our orthotic specialists will conduct a thorough evaluation to determine the most appropriate orthotic intervention for your specific condition and functional needs.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What's the difference between custom and off-the-shelf orthotics?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text fontWeight="medium">Custom Orthotics:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Individually designed based on precise measurements and impressions of your body</Text>
                            <Text>• Created specifically for your unique anatomy and condition</Text>
                            <Text>• Manufactured using advanced materials tailored to your activity level and needs</Text>
                            <Text>• Provide optimal biomechanical correction and support</Text>
                            <Text>• Typically more expensive but offer better long-term outcomes</Text>
                            <Text>• Usually have a longer lifespan than off-the-shelf options</Text>
                            <Text>• Often covered by insurance when medically necessary</Text>
                          </Box>
                          
                          <Text fontWeight="medium" mt={4}>Off-the-Shelf Orthotics:</Text>
                          <Box ml={6} mt={1}>
                            <Text>• Pre-manufactured in standard sizes and designs</Text>
                            <Text>• Available immediately without waiting for fabrication</Text>
                            <Text>• Less expensive than custom options</Text>
                            <Text>• May be sufficient for mild conditions or temporary use</Text>
                            <Text>• Can be useful as an interim solution while custom orthotics are being made</Text>
                            <Text>• Some higher-end prefabricated orthotics can be heat-molded for better fit</Text>
                            <Text>• Generally less durable with shorter lifespans</Text>
                          </Box>
                          
                          <Text mt={3}>
                            Our specialists will recommend the appropriate type based on your condition, activity level, and goals. In many cases, we may suggest starting with prefabricated orthotics for mild conditions or immediate relief, while custom orthotics are being fabricated for long-term management of more complex issues.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              How long does it take to get used to wearing an orthotic device?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            The adjustment period for orthotic devices varies depending on the type of orthotic and the condition being treated. Generally, you can expect:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">Foot Orthotics:</Text>
                            <Text ml={4}>• Initial adjustment period of 1-2 weeks</Text>
                            <Text ml={4}>• Begin with wearing them 1-2 hours daily, gradually increasing wear time</Text>
                            <Text ml={4}>• Full adaptation typically occurs within 3-4 weeks</Text>
                            
                            <Text fontWeight="medium" mt={2}>Ankle-Foot Orthoses (AFOs):</Text>
                            <Text ml={4}>• Initial adjustment period of 2-3 weeks</Text>
                            <Text ml={4}>• May require adjustments to footwear</Text>
                            <Text ml={4}>• Might experience some skin sensitivity initially</Text>
                            
                            <Text fontWeight="medium" mt={2}>Knee Braces:</Text>
                            <Text ml={4}>• 1-2 weeks adjustment period for most users</Text>
                            <Text ml={4}>• May need to modify activities initially</Text>
                            
                            <Text fontWeight="medium" mt={2}>Spinal Orthotics:</Text>
                            <Text ml={4}>• More substantial adjustment period of 3-4 weeks</Text>
                            <Text ml={4}>• Often requires a gradual wearing schedule</Text>
                            <Text ml={4}>• May need core strengthening exercises in conjunction</Text>
                          </Box>
                          <Text mt={3}>
                            During the break-in period, it's normal to experience some mild discomfort, but you should not experience pain or skin breakdown. We provide detailed wearing schedules and follow-up appointments to ensure successful adaptation. If you experience persistent discomfort, contact us promptly for adjustments to your orthotic device.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              Can children use orthotic devices?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Yes, orthotic devices are commonly prescribed for children to address a wide range of congenital and developmental conditions. Pediatric orthotics are specially designed to accommodate growth while providing necessary support and correction.
                          </Text>
                          <Text mt={3}>
                            Common conditions treated with pediatric orthotics include:
                          </Text>
                          <Box ml={6} mt={1}>
                            <Text>• Clubfoot</Text>
                            <Text>• Pediatric flat feet</Text>
                            <Text>• In-toeing or out-toeing</Text>
                            <Text>• Cerebral palsy</Text>
                            <Text>• Spina bifida</Text>
                            <Text>• Developmental dysplasia of the hip</Text>
                            <Text>• Scoliosis</Text>
                            <Text>• Growth-related pain syndromes</Text>
                          </Box>
                          <Text mt={3}>
                            Our pediatric orthotic specialists are experienced in working with children of all ages. We understand the unique challenges of fitting and maintaining orthotic devices for growing children and make the process as comfortable and positive as possible.
                          </Text>
                          <Text mt={3}>
                            For children, orthotic devices typically need more frequent adjustments or replacements to accommodate growth. We offer growth adjustment programs and regular follow-ups to ensure optimal function and comfort as your child develops.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>
                  </Accordion>
                </motion.div>
              </TabPanel>

              {/* Insurance & Billing */}
              <TabPanel>
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Accordion allowMultiple>
                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              Does insurance cover prosthetic and orthotic devices?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Most insurance plans, including Medicare, Medicaid, and private insurance, provide coverage for prosthetic and orthotic devices when they are deemed medically necessary. However, coverage details vary significantly between insurance providers and specific plans.
                          </Text>
                          <Text mt={3}>
                            Generally, insurance coverage for prosthetics and orthotics may include:
                          </Text>
                          <Box ml={6} mt={1}>
                            <Text>• Evaluation and fitting</Text>
                            <Text>• The device itself</Text>
                            <Text>• Necessary adjustments and repairs</Text>
                            <Text>• Replacement when medically necessary (typically every 3-5 years for prosthetics)</Text>
                          </Box>
                          <Text mt={3}>
                            Factors that may affect coverage include:
                          </Text>
                          <Box ml={6} mt={1}>
                            <Text>• Whether the device is deemed medically necessary</Text>
                            <Text>• Prior authorization requirements</Text>
                            <Text>• In-network vs. out-of-network providers</Text>
                            <Text>• Deductibles, co-pays, and coinsurance amounts</Text>
                            <Text>• Policy limits on prosthetic/orthotic devices</Text>
                            <Text>• For Medicare, the device must meet specific criteria and be prescribed by a physician</Text>
                          </Box>
                          <Text mt={3}>
                            Our insurance specialists will verify your coverage before treatment begins and provide detailed information about any out-of-pocket costs you may incur. We also work with various funding organizations and can help explore financial assistance options if needed.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What is the process for insurance authorization?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            The insurance authorization process for prosthetic and orthotic devices typically follows these steps:
                          </Text>
                          <Box ml={6} mt={2}>
                            <StepItem step="1" text="Referral and Documentation: We collect the physician's prescription, medical records, and clinical documentation establishing medical necessity." />
                            
                            <StepItem step="2" text="Insurance Verification: Our insurance specialists verify your coverage and benefits for prosthetic/orthotic services." />
                            
                            <StepItem step="3" text="Pre-authorization Request: We submit a detailed request to your insurance company, including the diagnosis, device specifications, and supporting documentation." />
                            
                            <StepItem step="4" text="Insurance Review: Your insurer reviews the request, which can take anywhere from a few days to several weeks depending on the complexity." />
                            
                            <StepItem step="5" text="Determination: The insurance company provides an approval, denial, or request for additional information." />
                            
                            <StepItem step="6" text="Patient Notification: We inform you of the insurance decision and any estimated out-of-pocket costs." />
                            
                            <StepItem step="7" text="Appeals (if necessary): If the request is denied, we can assist with the appeals process, which may involve submitting additional documentation or having peer-to-peer reviews." />
                          </Box>
                          <Text mt={3}>
                            Our team handles most of this process for you, keeping you informed throughout. We work diligently to secure authorization before proceeding with fabrication when possible, to minimize unexpected costs. For urgent cases, we may begin the fabrication process concurrently with the authorization request.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What if my insurance denies coverage?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            If your insurance denies coverage for your prosthetic or orthotic device, we offer several options:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">Appeals Process:</Text>
                            <Text ml={4}>• We can help file an appeal with your insurance company</Text>
                            <Text ml={4}>• This may involve submitting additional documentation of medical necessity</Text>
                            <Text ml={4}>• Multiple levels of appeal are often available</Text>
                            <Text ml={4}>• Success rates for appeals are relatively high when properly documented</Text>
                            
                            <Text fontWeight="medium" mt={3}>Alternative Funding Sources:</Text>
                            <Text ml={4}>• Veterans Administration benefits (for qualifying veterans)</Text>
                            <Text ml={4}>• State vocational rehabilitation programs</Text>
                            <Text ml={4}>• Non-profit organizations specific to your condition</Text>
                            <Text ml={4}>• Grants for assistive technology</Text>
                            
                            <Text fontWeight="medium" mt={3}>Payment Options:</Text>
                            <Text ml={4}>• Interest-free payment plans</Text>
                            <Text ml={4}>• Care Credit financing (medical credit card)</Text>
                            <Text ml={4}>• Sliding scale fees based on financial need</Text>
                            <Text ml={4}>• Reduced-cost alternatives when appropriate</Text>
                          </Box>
                          <Text mt={3}>
                            Our patient advocates are experienced in navigating these challenges and will work with you to explore all available options. We are committed to helping you obtain the devices you need regardless of insurance limitations.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              Does Medicare cover prosthetics and orthotics?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Yes, Medicare does provide coverage for prosthetic and orthotic devices under Medicare Part B (Medical Insurance) when they are deemed medically necessary. Here's what you need to know about Medicare coverage:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">Coverage Requirements:</Text>
                            <Text ml={4}>• The prosthetic or orthotic must be prescribed by a Medicare-enrolled physician</Text>
                            <Text ml={4}>• The device must be medically necessary to function in daily life (not primarily for athletic or recreational purposes)</Text>
                            <Text ml={4}>• The device must be provided by a Medicare-enrolled supplier (like our practice)</Text>
                            
                            <Text fontWeight="medium" mt={3}>Medicare Payment Structure:</Text>
                            <Text ml={4}>• Medicare typically pays 80% of the approved amount</Text>
                            <Text ml={4}>• You are responsible for the remaining 20% coinsurance</Text>
                            <Text ml={4}>• The Medicare Part B deductible applies ($240 in 2024)</Text>
                            <Text ml={4}>• Medicare Supplement (Medigap) policies may cover the 20% coinsurance</Text>
                            
                            <Text fontWeight="medium" mt={3}>Covered Items Include:</Text>
                            <Text ml={4}>• Arm, leg, back, and neck braces</Text>
                            <Text ml={4}>• Artificial limbs and eyes</Text>
                            <Text ml={4}>• Breast prostheses after mastectomy</Text>
                            <Text ml={4}>• Therapeutic shoes for people with severe diabetic foot disease</Text>
                            <Text ml={4}>• Repairs and replacements when needed due to wear, loss, or change in condition</Text>
                          </Box>
                          <Text mt={3}>
                            As a Medicare-enrolled supplier, we handle all Medicare billing directly and will clearly explain any out-of-pocket costs before proceeding with treatment. We also work with Medicare Advantage plans, though coverage details may vary from standard Medicare.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>
                  </Accordion>
                </motion.div>
              </TabPanel>

              {/* Care & Maintenance */}
              <TabPanel>
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Accordion allowMultiple>
                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              How do I clean and maintain my prosthetic device?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Proper cleaning and maintenance are essential for the longevity and function of your prosthetic device. Here are general guidelines:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">Daily Cleaning:</Text>
                            <Text ml={4}>• Clean the socket with mild soap and warm water</Text>
                            <Text ml={4}>• Wipe down with alcohol-free disinfectant wipes</Text>
                            <Text ml={4}>• Allow to air dry completely before wearing</Text>
                            <Text ml={4}>• Never use harsh chemicals, bleach, or acetone</Text>
                            
                            <Text fontWeight="medium" mt={3}>Liner Care:</Text>
                            <Text ml={4}>• Wash liners daily with gentle, fragrance-free soap</Text>
                            <Text ml={4}>• Rinse thoroughly to remove all soap residue</Text>
                            <Text ml={4}>• Pat dry with a lint-free cloth</Text>
                            <Text ml={4}>• Allow to fully air dry before using</Text>
                            <Text ml={4}>• Consider having multiple liners to rotate</Text>
                            
                            <Text fontWeight="medium" mt={3}>Mechanical Components:</Text>
                            <Text ml={4}>• Inspect regularly for wear and tear</Text>
                            <Text ml={4}>• Remove debris, dirt, and sand promptly</Text>
                            <Text ml={4}>• Do not lubricate joints unless specifically instructed</Text>
                            <Text ml={4}>• Avoid submerging mechanical parts in water (unless waterproof)</Text>
                            
                            <Text fontWeight="medium" mt={3}>Preventative Maintenance:</Text>
                            <Text ml={4}>• Schedule regular professional check-ups (every 6-12 months)</Text>
                            <Text ml={4}>• Avoid excessive heat (don't leave in hot cars)</Text>
                            <Text ml={4}>• Keep away from pets that might damage the device</Text>
                            <Text ml={4}>• Follow weight limits and activity restrictions</Text>
                          </Box>
                          <Text mt={3}>
                            We provide detailed, device-specific care instructions with every prosthetic. If you notice any unusual wear, loose parts, or changes in fit or function, contact us immediately for assessment—don't attempt complex repairs yourself.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              How do I care for the skin where my prosthetic attaches?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Proper skin care is crucial for prosthetic users to prevent irritation, breakdown, and infection. Follow these guidelines to maintain healthy skin:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">Daily Cleaning:</Text>
                            <Text ml={4}>• Wash the residual limb with mild, fragrance-free soap</Text>
                            <Text ml={4}>• Use warm (not hot) water</Text>
                            <Text ml={4}>• Rinse thoroughly to remove all soap</Text>
                            <Text ml={4}>• Pat dry gently with a clean towel</Text>
                            <Text ml={4}>• Allow to fully air dry before donning prosthesis</Text>
                            
                            <Text fontWeight="medium" mt={3}>Skin Inspection:</Text>
                            <Text ml={4}>• Check skin daily for redness, irritation, or breakdown</Text>
                            <Text ml={4}>• Use a mirror to see all areas</Text>
                            <Text ml={4}>• Pay special attention to bony prominences</Text>
                            <Text ml={4}>• Any redness that doesn't fade within 15 minutes of removing the prosthesis requires attention</Text>
                            
                            <Text fontWeight="medium" mt={3}>Moisturizing:</Text>
                            <Text ml={4}>• Apply appropriate moisturizers at night after cleaning</Text>
                            <Text ml={4}>• Allow to fully absorb before sleep</Text>
                            <Text ml={4}>• Avoid petroleum-based products that can degrade liner materials</Text>
                            <Text ml={4}>• Use only products recommended by your prosthetist</Text>
                            
                            <Text fontWeight="medium" mt={3}>When to Seek Help:</Text>
                            <Text ml={4}>• Persistent redness or skin discoloration</Text>
                            <Text ml={4}>• Blisters, cuts, or abrasions</Text>
                            <Text ml={4}>• Unusual swelling or volume changes</Text>
                            <Text ml={4}>• Pain or discomfort when wearing the prosthesis</Text>
                            <Text ml={4}>• Any signs of infection (warmth, discharge, odor)</Text>
                          </Box>
                          <Text mt={3}>
                            Remember that skin problems are easier to prevent than to treat. Regular inspection and proper hygiene are essential components of prosthetic care. Don't hesitate to contact us with any skin concerns, even if they seem minor—early intervention can prevent more serious complications.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              How often should I have my device serviced or checked?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            Regular maintenance and check-ups are essential for ensuring the optimal function, comfort, and safety of your prosthetic or orthotic device. We recommend the following schedule:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">Prosthetic Devices:</Text>
                            <Text ml={4}>• Comprehensive evaluation every 6 months</Text>
                            <Text ml={4}>• More frequent visits for new users (every 2-3 months initially)</Text>
                            <Text ml={4}>• Children should be seen every 3-4 months due to growth</Text>
                            <Text ml={4}>• High-activity users may need more frequent checks</Text>
                            
                            <Text fontWeight="medium" mt={3}>Orthotic Devices:</Text>
                            <Text ml={4}>• Check-ups every 6-12 months for most devices</Text>
                            <Text ml={4}>• Spinal orthoses should be checked every 3-6 months</Text>
                            <Text ml={4}>• Pediatric orthoses need evaluation every 3-4 months</Text>
                            <Text ml={4}>• AFOs and KAFOs should be assessed every 6 months</Text>
                            
                            <Text fontWeight="medium" mt={3}>Additional Service Visits:</Text>
                            <Text ml={4}>• Anytime you experience fit issues or discomfort</Text>
                            <Text ml={4}>• After significant weight change (gain or loss of more than 10 lbs)</Text>
                            <Text ml={4}>• Following any changes in activity level or lifestyle</Text>
                            <Text ml={4}>• If you notice unusual noises, movement, or wear in the device</Text>
                            <Text ml={4}>• After any fall or impact to the device</Text>
                          </Box>
                          <Text mt={3}>
                            During maintenance visits, we will check alignment, inspect components for wear and tear, verify proper fit, and make necessary adjustments. Preventative maintenance helps avoid unexpected breakdowns and extends the life of your device. Many insurance plans, including Medicare, cover these routine check-ups.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <AccordionItem mb={4} border="none" boxShadow="md" borderRadius="md">
                        <h2>
                          <AccordionButton bg="white" _hover={{ bg: 'gray.50' }} p={4} borderRadius="md">
                            <Box flex="1" textAlign="left" fontWeight="semibold">
                              What should I do if my device breaks or malfunctions?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={2}>
                          <Text>
                            If your prosthetic or orthotic device breaks or malfunctions, follow these steps:
                          </Text>
                          <Box ml={6} mt={2}>
                            <Text fontWeight="medium">1. Stop Using the Device:</Text>
                            <Text ml={4}>• Discontinue use immediately if you notice any structural damage or mechanical failure</Text>
                            <Text ml={4}>• Using a damaged device can lead to injury or further damage</Text>
                            <Text ml={4}>• Have a backup device on hand if possible (especially important for prosthetic users)</Text>
                            
                            <Text fontWeight="medium" mt={3}>2. Contact Our Office:</Text>
                            <Text ml={4}>• Call our emergency service line: (310) 555-7890</Text>
                            <Text ml={4}>• Describe the issue in detail</Text>
                            <Text ml={4}>• Take photos of any visible damage if possible</Text>
                            <Text ml={4}>• For urgent situations, we offer same-day appointments when available</Text>
                            
                            <Text fontWeight="medium" mt={3}>3. Temporary Solutions:</Text>
                            <Text ml={4}>• For minor issues, we may provide instructions for temporary fixes</Text>
                            <Text ml={4}>• Never attempt major repairs yourself</Text>
                            <Text ml={4}>• We can sometimes provide loaner devices while yours is being repaired</Text>
                            <Text ml={4}>• For non-weight-bearing components, temporary protective wrapping may be advised</Text>
                            
                            <Text fontWeight="medium" mt={3}>4. Repair Process:</Text>
                            <Text ml={4}>• Many repairs can be completed same-day or within 24-48 hours</Text>
                            <Text ml={4}>• More complex issues may require component ordering and more time</Text>
                            <Text ml={4}>• We handle all insurance paperwork for covered repairs</Text>
                            <Text ml={4}>• Warranty coverage may apply for newer devices</Text>
                          </Box>
                          <Text mt={3}>
                            We understand how disruptive device malfunctions can be to your daily life and prioritize repair services accordingly. Our goal is to minimize downtime and get you back to your routine as quickly as possible. For emergencies outside of regular business hours, our answering service can connect you with on-call technical support.
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </motion.div>
                  </Accordion>
                </motion.div>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Box mt={16} bg="gray.50" p={8} borderRadius="xl">
            <Flex align="center" mb={4}>
              <Icon as={FaInfoCircle} color="brand.500" boxSize={6} mr={3} />
              <Heading as="h3" size="lg">Still Have Questions?</Heading>
            </Flex>

            <Text fontSize="lg" mb={6}>
              If you couldn't find the answer to your question, our team is always available to help. Contact us directly for personalized assistance.
            </Text>

            <Flex direction={['column', 'row']} gap={4}>
              <Button as={RouterLink} to="/contact" size="lg" colorScheme="brand" leftIcon={<FaQuestion />}>
                Contact Us
              </Button>
              <Button as={Link} href="tel:+13105557890" size="lg" variant="outline" colorScheme="brand">
                Call (310) 555-7890
              </Button>
              <Button as={RouterLink} to="/resources" size="lg" variant="ghost" colorScheme="brand" leftIcon={<FaFileAlt />}>
                View Resources
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
}

// Step Item Component for numbered steps
function StepItem({ step, text }) {
  return (
    <Flex mb={2} align="start">
      <Flex
        align="center"
        justify="center"
        bg="brand.100"
        color="brand.700"
        borderRadius="full"
        fontSize="sm"
        fontWeight="bold"
        boxSize="24px"
        mr={3}
        mt={0.5}
      >
        {step}
      </Flex>
      <Text color="gray.700">{text}</Text>
    </Flex>
  );
}

export default FAQ;
