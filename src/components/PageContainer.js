import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function PageContainer({ children, noTopPadding = false }) {
  const [headerHeight, setHeaderHeight] = useState(70); // Default estimate

  useEffect(() => {
    // Measure the actual header height once mounted
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
      
      // Optional: Update on resize if header height might change
      const handleResize = () => {
        setHeaderHeight(header.offsetHeight);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Box pt={noTopPadding ? 0 : `${headerHeight}px`}>
      {children}
    </Box>
  );
}

export default PageContainer;
