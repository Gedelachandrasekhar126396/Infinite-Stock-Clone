import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";
 import { Grid, GridItem, Heading } from '@chakra-ui/react';
 import styles from "../cssFiles/SignupDesign.module.css";
 import { Button } from '@chakra-ui/react'
 import { Input } from '@chakra-ui/react'
export default function Signup(){
    return <div>
   <Navbar/>
   <div className= {styles.signup1} >
   <Grid templateColumns='repeat(2, 1fr)' >
  <GridItem >
  <div className= {styles.LeftBox} style={{textAlign:"left",paddingLeft:"200px"}} >
  <Heading as='h4' size='lg'>Create Account</Heading>
    <br/>
    <p>Email Address*</p> <br/>
    <Input placeholder='email' width="350px" /> <br/>
   <div style={{display:"flex",justifyContent:"space-between",width:"350px"}} >
   <label>create Password</label> <label>Confirm password</label>
   </div><br/>
   <div style={{display:"flex",justifyContent:"space-between",width:"350px"}} >
   <Input placeholder='email' width="150px" />
   <Input placeholder='email' width="170px" />
   </div> <br/>
   <Button width="350px"> <p>Sign up today for <b>exclusive offers</b> from </p> <br/>
   
    </Button> <br/><br/>

   <Button colorScheme='telegram' width="350px"> <b>create Account</b> </Button> <br/><br/>
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
    <Input placeholder='email' width="350px" /> <br/>
   
    <p>Password*</p> <br/>
    <Input placeholder='password' width="350px" /> <br/> <br/>
  

   <Button colorScheme='green' width="350px"> <b>Sign in</b> </Button> <br/><br/>
   
  <br/> <br/>

  </div>
  </GridItem>

</Grid>
   </div>

   <Footer/>
    </div>
}