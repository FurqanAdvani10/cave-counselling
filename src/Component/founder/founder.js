import React from 'react';
import late from '../../Assets/late.webp';
import { motion } from 'framer-motion'; // Add framer-motion for smooth animations

const FounderComponent = () => {
  return (
    <div className='section-padding'>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <motion.div 
          style={styles.avatarSection} 
          whileHover={{ scale: 1.05 }} // Avatar zoom effect
          transition={{ duration: 0.3 }}
        >
          <div style={styles.avatar}>
            <img
              src={late}
              alt="Portrait of Late Hajiyani Meimoona Bano"
              style={styles.image}
            />
          </div>
          <div style={styles.gradientOverlay}></div>
        </motion.div>

        <motion.div 
          style={styles.content} 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }}
        >
          <h1 style={styles.title}>Late Hajiyani Meimoona Bano</h1>
          <p style={styles.subtitle}>
            Founder & Inspiration of <span style={styles.highlight}>STLC</span>
          </p>
          <p style={styles.description}>
            A true visionary whose legacy continues to inspire us every day. Her contributions and dedication form the foundation of our success and growth.
          </p>
          <blockquote style={styles.quote}>
            "Empowering through education and dedication."
          </blockquote>
        </motion.div>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '40px',
    backgroundColor: '#f8f8f8', // Lighter background for contrast
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '40px auto',
    textAlign: 'center',
    fontFamily: '"Poppins", sans-serif',
    overflow: 'hidden',
    position: 'relative',
  },
  avatarSection: {
    position: 'relative',
    marginBottom: '20px',
    borderRadius: '50%',
    width: '180px',
    height: '180px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #9c27b0, #03cfc9)', // Adjusted gradient for a more balanced look
    opacity: 0.7,
    zIndex: 1,
    borderRadius: '50%',
    transition: 'opacity 0.3s ease',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 2,
    position: 'relative',
  },
  content: {
    padding: '20px',
    position: 'relative',
    zIndex: 3,
  },
  title: {
    fontSize: '2.5rem',
    color: '#4A2C1D', // Darker brown shade for title
    fontWeight: 'bold',
    margin: '10px 0',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontFamily: '"Roboto", sans-serif',
    transition: 'color 0.3s ease',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#333', // Subtle dark color for subtitle
    marginBottom: '15px',
    fontFamily: '"Roboto", sans-serif',
  },
  highlight: {
    color: '#03cfc9', // Highlight text with the accent color
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555', // Slightly lighter color for description
    lineHeight: '1.8',
    marginBottom: '15px',
    fontFamily: '"Roboto", sans-serif',
  },
  quote: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#4A2C1D', // Match quote color with the title
    marginTop: '15px',
    padding: '15px',
    borderLeft: '4px solid #03cfc9',
    backgroundColor: '#f0f8ff', // Light background for the quote
    display: 'inline-block',
    fontWeight: '600',
    fontFamily: '"Roboto", sans-serif',
  },
  ctaButton: {
    marginTop: '20px',
    padding: '12px 25px',
    background: 'linear-gradient(135deg, #9c27b0, #03cfc9)', // Matching button gradient with new design
    border: 'none',
    color: '#fff',
    fontSize: '1rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, background 0.3s ease',
    fontFamily: '"Roboto", sans-serif',
  },
  ctaButtonHover: {
    transform: 'scale(1.05)',
    background: 'linear-gradient(135deg, #03cfc9, #9c27b0)',
  },

  // Responsive design for smaller screens
  '@media (max-width: 768px)': {
    container: {
      padding: '20px',
    },
    avatarSection: {
      width: '150px',
      height: '150px',
    },
    title: {
      fontSize: '2rem',
    },
    subtitle: {
      fontSize: '1.2rem',
    },
    description: {
      fontSize: '1rem',
    },
  },

  '@media (max-width: 480px)': {
    container: {
      padding: '10px',
    },
    avatarSection: {
      width: '120px',
      height: '120px',
    },
    title: {
      fontSize: '1.8rem',
    },
    subtitle: {
      fontSize: '1rem',
    },
    description: {
      fontSize: '0.9rem',
    },
  },
};

export default FounderComponent;
