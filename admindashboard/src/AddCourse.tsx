import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddCourse() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imageLink, setImageLink] = React.useState('');
  const [price, setPrice] = React.useState('');
  const navigate = useNavigate();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    axios( {
      method: 'post',
      url:'http://localhost:3000/admin/courses',
      headers: { 'Content-Type': 'application/json',authorization:localStorage.getItem('token') },
      data:{
          title,imageLink,description,price
      }
    }).then((response)=>{
      if(response.status==200)
      {
        console.log('course created sucessfully');
        navigate('/');
        toast.success('Course added successfully');
      }
      else{
        alert('Error');
        console.error(response);
      }
    }).catch(e => {
      console.log(e);
  });
  };
  const handleTitleChange = (event:any) => {
    setTitle(event.target.value);
  }
  const handleDescriptionChange = (event:any) => {
    setDescription(event.target.value);
  }
  const handleImageLinkChange = (event:any) => {  
    setImageLink(event.target.value);
  }
   const handlePriceChange = (event:any) => {
    setPrice(event.target.value);
  }
  return (
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            p:3,
            boxShadow:'1',
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          bgcolor={'white'}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PostAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Course
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  onChange={handleTitleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="description"
                  id="description"
                  autoComplete="new-description"
                  onChange={handleDescriptionChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="imageLink"
                  label="ImageLink"
                  type="Link"
                  id="imageLink"
                  autoComplete="new-imageLink"
                  onChange={handleImageLinkChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="Number"
                  id="price"
                  autoComplete="new-price"
                  onChange={handlePriceChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Course
            </Button>
          </Box>
        </Box>
      </Container>
    
  );
}
