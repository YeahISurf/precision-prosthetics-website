import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ'; // Import the new FAQ page
import ScrollToTop from './components/ScrollToTop';
import customTheme from './theme';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      
      html {
        scroll-behavior: smooth;
      }
      
      body {
        transition: background-color 0.2s ease;
      }
      
      ::selection {
        background-color: #1861ff;
        color: white;
      }
    `}
  />
);

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} /> {/* Add new FAQ route */}
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;