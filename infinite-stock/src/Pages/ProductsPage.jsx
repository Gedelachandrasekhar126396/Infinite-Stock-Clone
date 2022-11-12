import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Heading } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react";
import { Checkbox } from '@chakra-ui/react'
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
        <b>Categories</b>
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
        <b>Price</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <p className={styles.Leftlist} ><Checkbox >Under INR 3654 (3,858) </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >INR 3654 - INR 7308 (5697) </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >INR 7308 - INR 13704 (5070) </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >INR 13704-INR 36544 (5795) </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >INR 36544+ (4586) </Checkbox></p>
   <div style={{display:"flex",justifyContent:"space-between"}} >
   <Button colorScheme='gray' variant='outline' ><label>Minimum</label> </Button>
    <Button colorScheme='gray' variant='outline' ><label>Maximum</label> </Button>
   </div> <br/>
   <Button width="270px" colorScheme='blue'>Apply</Button>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <b>Color</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <p className={styles.Leftlist} ><Checkbox >Red </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Blue </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Green </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Yellow </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Violet </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Indigo </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Orange </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Purple </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Gray </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Pink </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Maroon </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >White </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Green-Yellow </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Cobalt Blue </Checkbox></p>
    <p className={styles.Leftlist} ><Checkbox >Teal </Checkbox></p>
   <div style={{display:"flex",justifyContent:"space-between"}} >
   <Button colorScheme='gray' variant='outline' ><label>Minimum</label> </Button>
    <Button colorScheme='gray' variant='outline' ><label>Maximum</label> </Button>
   </div> <br/>
   <Button width="270px" colorScheme='blue'>Apply</Button>
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