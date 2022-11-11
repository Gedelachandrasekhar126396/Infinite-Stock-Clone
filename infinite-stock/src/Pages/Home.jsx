import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../cssFiles/HomeDesign.module.css";
import { Heading } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
// import { Button} from '@chakra-ui/react'
export default function Home(){
    return<>
    <div> <Navbar/></div>
    <div style={{padding :"0px 50px"}} >
        
        <img src="https://user-images.githubusercontent.com/107903370/201052827-85213dca-fc09-4c0b-8eca-b554b08698e6.png" alt="bodyFirstImage" />
        
    </div>
    <div className={styles.head2} >
        
        <Heading>Limited-Time Deals</Heading>
       <NavLink><div>
            <img src="https://user-images.githubusercontent.com/107903370/201057196-800872a0-a4ad-4243-9c27-c0bc3e97036a.png" alt="Limited-Deals" />
        </div></NavLink> 
        <div className={styles.home3} >
            <img src="https://user-images.githubusercontent.com/107903370/201058706-66adc268-50a2-4b52-9c16-510454f15906.png" alt="deck-your-halls" />
        </div>
        <div className={styles.home4} >
        <Heading>Fresh Finds In Each Category</Heading>
        <div style={{padding:"10px 100px"}} >
        <Grid templateColumns='repeat(6, 1fr)' gap={6}>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920" alt="furniture" />
    <Heading as='h5' size='sm'>Furniture</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920" alt="Area Rugs" />
    <Heading as='h5' size='sm'>Area Rugs</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920" alt="Bedding" />
    <Heading as='h5' size='sm'>Bedding</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920" alt="Home Decor" />
    <Heading as='h5' size='sm'>Home Decor</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920" alt="Window Treatments" />
    <Heading as='h5' size='sm'>Window Treatments</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920" alt="kitchen" />
    <Heading as='h5' size='sm'>Kitchen</Heading>
  </GridItem>
</Grid>
        </div>
        <div style={{padding:"10px 100px"}} >
        <Grid templateColumns='repeat(6, 1fr)' gap={6}>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920" alt="outdoor" />
    <Heading as='h5' size='sm'>Outdoor</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920" alt="Home Improvement" />
    <Heading as='h5' size='sm'>Home Improvement</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920" alt="Storage" />
    <Heading as='h5' size='sm'>Storage</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920" alt="Mattresses" />
    <Heading as='h5' size='sm'>Mattresses</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920" alt="Lightining" />
    <Heading as='h5' size='sm'>Lightining</Heading>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920" alt="Shop All Deals" />
    <Heading as='h5' size='sm'>Shop All Deals</Heading>
  </GridItem>
</Grid>
        </div>
        
        <div className={styles.home5} >
        <Heading as="h3" size="xl" style={{textAlign:"center"}}>Seasonal Updates to Warm up Your Winter</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} className={styles.SeasonalUpdates} >
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame1.jpg?imwidth=1920" alt="outdoor" />
    <Heading style={{textAlign:"left"}} as='h3' size='lg'>home gifts</Heading>
    <div style={{textAlign:"left"}} >Gift-ready home goods for everyone on your list.</div>
  </GridItem>
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame2.jpg?imwidth=1920" alt="Home Improvement" />
  <Heading style={{textAlign:"left"}} as='h3' size='lg'>kitchen appliances</Heading>
    <div style={{textAlign:"left"}} >Small but mighty tools that make food prep a breeze.</div>
  </GridItem>
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame3.jpg?imwidth=1920" alt="Storage" />
  <Heading style={{textAlign:"left"}} as='h3' size='lg'>christmas trees</Heading>
    <div style={{textAlign:"left"}} >The perfect place to put those perfect gifts.</div>
  </GridItem>
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame4.jpg?imwidth=1920" alt="Mattresses" />
  <Heading style={{textAlign:"left"}} as='h3' size='lg'>holiday decor</Heading>
    <div style={{textAlign:"left"}} >Deck your halls with the season’s festive finest.</div>
  </GridItem>
  
</Grid>

        </div>
        <div className={styles.home3} >
        
        <img src="https://user-images.githubusercontent.com/107903370/201134532-2c796ed2-8837-4ea9-85a2-8efa00e86444.png" alt="bodyFirstImage" />
        
    </div>
        <div className={styles.home5} >
        <Heading as="h3" size="xl" style={{textAlign:"center"}}>Overstock Featured Brands</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} className={styles.SeasonalUpdates} >
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_21238648.jpg?imwidth=1920" alt="outdoor" />
    <Heading  as='h3' size='md'>Extra 15% off</Heading>
    <div  >Select Bean Bags & More by <br/>Christopher Knight* </div>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_39766562.jpg?imwidth=1920" alt="outdoor" />
  <Heading  as='h3' size='md'>Extra 15% off</Heading>
    <div  >Select Lighting by <br/>JONATHAN Y*</div>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_37373953.jpg?imwidth=1920" alt="outdoor" />
  <Heading  as='h3' size='md'>Extra 15% off</Heading>
    <div  >Select Furniture by <br/>Angelo Home*</div>
  </GridItem>
  <GridItem><img src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_37777461.jpg?imwidth=1920" alt="outdoor" />
  <Heading  as='h3' size='md'>Extra 15% off</Heading>
    <div  >Select Home Office Furniture by<br/>OSP Home Furnishings* </div>
  </GridItem>  
</Grid>
</div>
<div className={styles.home5} >
        
        <Grid templateColumns='repeat(3, 1fr)'  className={styles.SeasonalUpdates} >
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_21238648.jpg?imwidth=1920" alt="outdoor" />
    <Heading  as='h3' size='md'>Extra 15% off</Heading>
    <div  >Select Bean Bags & More by <br/>Christopher Knight* </div>
  </GridItem>
  
  <GridItem style={{backgroundColor: "#f5f6f7",textAlign:"center",padding:"15px"}}>
  <p> <b style={{fontSize:"25px"}} >#overstockstyle</b> <br/>
  <b style={{fontSize:"33px"}} >savings & style <br/>in real life</b> <br/></p> <br/>
  <p style={{fontSize:"23px"}} >See how others are styling their rooms <br/> and score great deals on their look <br/>
  <br/>  Explore Rooms </p>
  </GridItem>
  <GridItem style={{backgroundColor: "#f5f6f7"}}><img src="https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_37373953.jpg?imwidth=1920" alt="outdoor" />
  <Heading  as='h3' size='md'>Extra 15% off</Heading>
    <div  >Select Furniture by <br/>Angelo Home*</div>
  </GridItem>
 
</Grid>
</div>
<div className={styles.home5} >
        <Heading as="h3" size="xl" style={{textAlign:"center",color: "#2F3337",fontSize:"30px"}}>We've Got Your Style</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} className={styles.SeasonalUpdates} >
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920" alt="outdoor" />
    <Heading style={{textAlign:"left"}} as='h3' size='lg'>Farmhouse</Heading>
    <div style={{textAlign:"left"}} >Country comforts abound in this fresh take on rustic home decor.</div>
  </GridItem>
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920" alt="Home Improvement" />
  <Heading style={{textAlign:"left"}} as='h3' size='lg'>Mid-Century Modern</Heading>
    <div style={{textAlign:"left"}} >Retro meets modern chic in these clean lines and vibrant tones.</div>
  </GridItem>
  <GridItem style={{backgroundColor: "#f5f6f7"}} ><img src="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920" alt="Storage" />
  <Heading style={{textAlign:"left"}} as='h3' size='lg'>Traditional</Heading>
    <div style={{textAlign:"left"}} >Cozy designs, clean and classic, give this style it’s signature appeal.</div>
  </GridItem>
</Grid>
</div>
<div style={{textAlign:"center",padding:"100px"}} >
<Heading  as='h3' size='xl'>Trending Searches</Heading> <br/>
<Grid templateColumns='repeat(3, 1fr)' gap={10}>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Mugs</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Blankets</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Cookie Cutters</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Air Fryers</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Kitchen Mixers</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Lamps</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Towels</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Tree Skirts</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Garland</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Fall Wreaths</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Christmas Trees</b> </GridItem>
  <GridItem w='100%' h='10' bg='gray.200' ><b style={{fontSize:"22px"}} >Fireplaces</b> </GridItem>
</Grid>
</div>
        </div>
    </div>
   <div><Footer/></div>
    
    </>
}