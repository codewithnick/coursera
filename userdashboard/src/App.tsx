import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Index';
import Navbar from './Navbar';
import SignIn from './Signin';
import SignUp from './Signup';
import { ToastContainer} from 'react-toastify';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import UpdateCourse from './UpdateCourse';
import MyCourses from './MyCourses';
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Box>
        
        </Box>
        
        <Routes>
          <Route path='/'element={<Index/>} ></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/mycourses' element={<MyCourses/>}></Route>
          <Route path='/courses/:courseid' element={<UpdateCourse/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
