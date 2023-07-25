import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import teacherurl from './assets/teacher.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Courses from './Courses'
const Index: React.FC = () => {
    const navigate = useNavigate();
  if(localStorage.getItem('token'))
  return(<>
    <Courses/>  
  </>)
  else
  return (
    <Container style={styles.container} maxWidth="sm">
      <Typography variant="h2" style={styles.heading}>
        Coursera
      </Typography>
      <Typography variant="h5" style={styles.subHeading}>
        Learn anything, anytime, anywhere.
      </Typography>
      <img src={teacherurl} alt="Course Image" style={styles.image}  height={'auto'} width={'150px'}/>
      <Button variant="contained" color="primary" style={styles.button} onClick={()=>navigate('/signin')} >
        Get Started
      </Button>
    </Container>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: '50px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  subHeading: {
    marginBottom: '40px',
    color: '#666',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    borderRadius: '8px',
  },
};

export default Index;
