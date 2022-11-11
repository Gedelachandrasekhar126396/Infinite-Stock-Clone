import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Heading } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box
  } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import styles from "../cssFiles/ProductsDesign.module.css"
export default function ProductsPage(){
    const [list,setList] = useState([]);
   const getData =()=>{
       axios.get(`https://basic-api-list.herokuapp.com/overstock-products`)
       .then((res)=>{
        setList(res.data);
        console.log(res.data)
       })
       
   }
   useEffect(()=>{
    getData();
   },[])
    return <div >
        <Navbar/>
        <div style={{padding:"50px",textAlign:"left"}} >
            <Heading>Home Goods Sale</Heading><br/>
            <p> Shop all Dreams </p> <br/> <br/>
            <div className={styles.productsPage1} >
                <div style={{paddingRight :"20px"}} >
                    
                    <Accordion  width="300px" allowToggle>
  <AccordionItem  >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <b>Category</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <p className={styles.Leftlist} >On Sale Duvet Covers & Sets</p>
    <p className={styles.Leftlist} >On Sale Comforter Sets</p>
    <p className={styles.Leftlist} >On Sale Blankets & Throws</p>
    <p className={styles.Leftlist} >On Sale Quilts & Coverlets</p>
    <p className={styles.Leftlist} >On Sale Bed-in-a-Bag</p>
    <p className={styles.Leftlist} >On Sale Bed Skirts</p>
    <p className={styles.Leftlist} >On Sale Bedspreads</p>
    <p className={styles.Leftlist} >On Sale Daybed Covers & Sets</p>
    <p className={styles.Leftlist} >On Sale Bed Canopies</p>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <b>Category</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
                </div>
                <div padding="10px" >  
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {list.map((el)=>
                    <GridItem key={el.id} className={styles.grid} >
                        <img src={el.imageSrc} alt={el.id} />
                          <Heading size="sm" color="red.500" className= {styles.heading} > {el.sale} </Heading>
                          <p> {el.category} </p>
                          <p>Rating: {el.rating} </p>
                          <Button className={styles.AddToCart} colorScheme='red' variant='outline'>Add to cart</Button>
                       </GridItem>

                  )}
                    
  
                 </Grid>
                   
                    
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}