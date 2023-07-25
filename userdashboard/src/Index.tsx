import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import teacherurl from './assets/teacher.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Courses from './Courses'
import coursegif from './assets/course.gif'
const Index: React.FC = () => {
    const navigate = useNavigate();
  if(localStorage.getItem('token'))
  return(<>
    <Courses/>  
  </>)
  else
  return (
    <div style={styles.heroContainer}>
    <div style={styles.backgroundBlur}></div>
    <img src={coursegif} alt="Background" style={styles.backgroundImage} />
    <Container style={styles.contentContainer} maxWidth="md">
      <Typography variant="h2" style={styles.heading}>
        Coursera
      </Typography>
      <Typography variant="h5" style={styles.subHeading}>
        Learn anything, anytime, anywhere.
      </Typography>
      <Button variant="contained" color="primary" style={styles.button} onClick={()=>{navigate('/signup')}}>
        Get Started
      </Button>
    </Container>
  </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  heroContainer: {
  
    overflow: 'hidden',
    height:'100%',
    width:'100%'

  },
  backgroundBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.7)', // White with opacity for blur effect
    backdropFilter: 'blur(1px)', // Blur effect
    zIndex: -1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -2, // Move below the blur layer
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#333', // Adjusted text color for better visibility
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)', // Adjusted text shadow for better visibility
  },
  heading: {
    marginBottom: '20px',
    fontSize: '3.5rem',
  },
  subHeading: {
    marginBottom: '40px',
    color: '#666', // Adjusted subheading color
    fontSize: '1.5rem',
  },
  button: {
    fontSize: '1.2rem',
    padding: '12px 32px',
    borderRadius: '8px',
  },
};
export default Index;
