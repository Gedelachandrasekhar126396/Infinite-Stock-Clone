import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";
 import { Grid, GridItem, Heading } from '@chakra-ui/react';
 import styles from "../cssFiles/SignupDesign.module.css";
 import { Button } from '@chakra-ui/react'
 import { Input } from '@chakra-ui/react';
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
// import { useState } from "react";
// 
export default function Signup(){
  const {SignUp,Login} = useContext(AuthContext);
  const initState = {
    email:"", password:""
  }
  const loginState = {
    email:"", password:""
  }
  const[LoginUser,SetLoginUser] = useState(loginState)
  const [newUser,setNewUser] = useState(initState);
  const handleChange2 =(e)=>{
    SetLoginUser({...LoginUser,[e.target.name]:e.target.value})
  }
  const handleChange=(e)=>{
  setNewUser({...newUser, [e.target.name]: e.target.value })
  }
  console.log(newUser)
  const handleClick=()=>{
    SignUp(newUser.email,newUser.password)
  }
  const handleLoginFunc=()=>{
    Login(LoginUser.email,LoginUser.password)
  }
    return <div>
   <Navbar/>
   <div className= {styles.signup1} >
   <Grid templateColumns='repeat(2, 1fr)' >
  <GridItem >
  <div className= {styles.LeftBox} style={{textAlign:"left",paddingLeft:"200px"}} >
  <Heading as='h4' size='lg'>Create Account</Heading>
    <br/>
    <p>Email Address*</p> <br/>
    <Input placeholder='email' width="350px" value={newUser.email} name="email" onChange={handleChange} /> <br/>
   <div style={{display:"flex",justifyContent:"space-between",width:"350px"}} >
   <label>create Password</label> <label>Confirm password</label>
   </div><br/>
   <div style={{display:"flex",justifyContent:"space-between",width:"350px"}} >
   <Input placeholder='password' width="150px" value={newUser.password} name="password" onChange={handleChange} />
   <Input placeholder='Confirm Password' width="170px" />
   </div> <br/>
   <Button width="350px"> <p>Sign up today for <b>exclusive offers</b> from </p> <br/>
   
    </Button> <br/><br/>

   <Button onClick={()=>handleClick()} colorScheme='telegram' width="350px"> <b>create Account</b> </Button> <br/><br/>
   <Button colorScheme='gray' width="350px" variant='outline'>
    Continue as Guest
  </Button>
  <br/> <br/>
  <p > By creating an account or continuing as a Guest, you <br/> agree to our <b>Terms & Conditions</b> and 
   <b>Private Policy</b> </p>
   <p style={{paddingLeft:"50px"}} >  <b>Terms & Conditions</b> |
   <b>Private Policy</b><br/>
   You can unsubscribe at any Time** </p> <br/> <br/> <br/>
  </div>
  </GridItem>
  <GridItem >
  <div className= {styles.LeftBox} style={{textAlign:"left",paddingLeft:"200px"}} >
  <Heading as='h4' size='lg'>Sign in</Heading>
    <br/>
    <p>Email Address*</p> <br/>
    <Input placeholder='email' width="350px" onChange={handleChange2} value={LoginUser.email} name="email" /> <br/>
   
    <p>Password*</p> <br/>
    <Input placeholder='password' width="350px" onChange={handleChange2} value={LoginUser.password} name="password" /> <br/> <br/>
  

   <Button colorScheme='green' width="350px" onClick={()=>handleLoginFunc()} > <b>Sign in</b> </Button> <br/><br/>
   
  <br/> <br/>

  </div>
  </GridItem>

</Grid>
   </div>

   <Footer/>
    </div>
}