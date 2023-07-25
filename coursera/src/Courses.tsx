import React from 'react';
import axios from 'axios';
import { Button, Card, Container, Typography,CardMedia, Box} from '@mui/material';
import {Link} from 'react-router-dom';

function Courses() {
  
  const [courses, setcourses] = React.useState([]);
   React.useEffect(() => {
    axios({
        method: 'get',
        url:'http://localhost:3000/admin/courses',
        headers: { 'Content-Type': 'application/json',Authorization:localStorage.getItem('token') },
        data:{}
    }).then((response)=>{
        if(response.status==200)
        {
          console.log(response.data.courses)
          setcourses(response.data.courses);
        }
        else
        {
            alert('Error');
            console.error(response);
        }
    })
  },[]); 

  
    return (
      <>
       <Container sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', width:"100%"}}>
          {courses.map((course) => {
            return (
            Course(course))
          })}
        </Container>
      
    </>
    )
}
export default Courses;

function Course(props:any) {
  return <Card variant='elevation'
    key={props._id}
    sx={{
      m: 2,
      p: 1,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'center',
      width: '300px',
      height: '200px',
    }}
  >
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <div>
      <Box src={props.imageLink}
        display={'block'}
        component="img"
        alt={props.title}
        sx={{ width: '100%', height: '100px', margin: 'auto', objectFit: 'contain' }} />
    </div>


    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='h5'>{props.price}</Typography>
        <Link  to={'/courses/'+props._id} color='white' >
        Update
        </Link>
    </Container>
  </Card>;
}
