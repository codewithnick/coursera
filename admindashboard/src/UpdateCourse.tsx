import React from 'react';
import axios from 'axios';
import { Button, Card, Container, Typography,CardMedia, Box} from '@mui/material';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function UpdateCourse() {
  const {courseid}=useParams();
  const [course, setcourse] = React.useState('');
   React.useEffect(() => {
    axios({
        method: 'get',
        url:'http://localhost:3000/admin/courses/'+courseid,
        headers: { 'Content-Type': 'application/json',Authorization:localStorage.getItem('token') },
        data:{}
    }).then((response)=>{
        if(response.status==200)
        {
          console.log(response.data.course)
          setcourse(response.data.course);
          console.log(course);
        }
        else
        {
            alert('Error');
            console.error(response);
        }
    })
  },[]); 

  if(course)
    return (
      <>
       <Container sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', width:"100%"}}>
            <Card>Updating course</Card>
            <Course course={course} setcourse={setcourse}/>
        </Container>
    </>
    )
    else
    return <h1>Loading...</h1>
}
export default UpdateCourse;

function Course(props:any) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [imageLink, setImageLink] = React.useState(''); 
    React.useEffect(() => {
        console.log(props);
        setTitle(props.course.title)
        setDescription(props.course.description)
        setPrice(props.course.price)
        setImageLink(props.course.imageLink)
    },[]);
    function handleSubmit(event:any){
        axios( {
          method: 'put',
          url:'http://localhost:3000/admin/courses/'+props.course._id,
          headers: { 'Content-Type': 'application/json',authorization:localStorage.getItem('token') },
          data:{
              title,imageLink,description,price
          }
        }).then((response)=>{
          if(response.status==200)
          {
            console.log('course updated sucessfully');
            props.setcourse({
                _id:props.course._id,
                title,description,price,imageLink
            });
            toast.success('Course updated successfully');
          }
          else{
            alert('Error');
            console.error(response);
          }
        }).catch(e => {
          console.log(e);
      });
    }
    function handleDescriptionChange(event:any){
        setDescription(event.target.value);
    }
    function handlePriceChange(event:any){
        setPrice(event.target.value);
    }
    function handleImageLinkChange(event:any){
        setImageLink(event.target.value);
    }
    function handleTitleChange(event:any){
        setTitle(event.target.value);
    }
  return <Card variant='elevation'
    key={props._id}
    sx={{
      m: 1,
      p: 1,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <h2>{props.course.title}</h2>
    <p>{props.course.description}</p>
    <div>
      <Box src={props.course.imageLink}
        display={'block'}
        component="img"
        alt={props.course.title}
        sx={{ width: '100%', height: '100px', margin: 'auto', objectFit: 'contain' }} />
        <Typography variant='h5'>Price: {props.course.price}</Typography>
    </div>


    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      
    
        <Box  sx={{
            p:2,
            boxShadow:'1',
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          bgcolor={'white'}
        >
       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  defaultValue={title}
                  onChange={handleTitleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
              Update Course
            </Button>
          </Box>
          </Box>
    </Container>
  </Card>;
  
}
