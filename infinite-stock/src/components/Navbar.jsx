import styles from "../cssFiles/NavbarDesign.module.css";
import { Input } from '@chakra-ui/react';
import {
    Menu, MenuButton, MenuList, MenuItem, Box} from '@chakra-ui/react';
    import {NavLink} from "react-router-dom"
export default function Navbar(){
    return <div className= {styles.Navbar} >
        
        <div className={styles.NavbarTop} >
            
            <div ><img src= "https://user-images.githubusercontent.com/107903370/200830608-559387d7-0574-4a10-877a-4aa37ecfe143.png" alt="logo" width= "200px" className={styles.NavLogo} /></div>
            <div style={{display:"flex"}} >
            <Input placeholder='Search...everything you find ships for free' size='md' width= "1100px"  className={styles.NavInput}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" className= {styles.searchIcon} >
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            </div>
            
            <div className={styles.NavTopRight}>
            <div>
            <Menu>
  <MenuButton  onMouseEnter={true} variant={"outline"} >
  <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" >
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> </div>
<label>Login</label>
  </MenuButton>
  <MenuList>
    <MenuItem className= {styles.SignIn} ><strong>Sign In</strong></MenuItem>
    
    
    <MenuItem>
    <Box style={{padding:"10px 0px"}} >
        <NavLink><strong style={{fontSize:"20px"}} className={styles.SignIn} >Create an Account</strong></NavLink>
        <h4>Track orders, save items <br/> to lists and more!</h4>
    </Box>
    </MenuItem>
    <MenuItem className={styles.SignIn}>My Account</MenuItem>
    <MenuItem className={styles.SignIn}>My Orders</MenuItem>
    <MenuItem className={styles.SignIn}>My Reviews</MenuItem>
    <MenuItem className={styles.SignIn}>Help</MenuItem>
  </MenuList>
</Menu>
            </div>
            <div>
            <Menu>
  <MenuButton  onMouseEnter={true} variant={"outline"} >
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
<label>Lists</label> </div>

  </MenuButton>
  <MenuList>
   
    <MenuItem className={styles.ListsLogo}>Favourites</MenuItem>
    <MenuItem className={styles.ListsLogo}>Save for Later</MenuItem>
    <MenuItem className={styles.ListsLogo}>View All My Lists</MenuItem>
    <MenuItem className={styles.ListsLogo}>Find a List</MenuItem>
  </MenuList>
</Menu>
            </div>
            <div style={{textAlign:"center"}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" >
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<label>Cart</label>
            </div>     

</div>
        </div>
        <div className={styles.NavbarBottom} >
        <div>
        <Menu style={{backgroundColor: "none"}} >
  <MenuButton>
    <label className={styles.furnitureLabel}>Furniture</label>
  </MenuButton>
  <MenuList>
    <MenuItem>
    <div className={styles.item1} >
    <div style={{padding:"5px 30px"}} >
            <ul>
                <li className= {styles.firstElementinLIst}  >Living Room Furniture</li>
                <li>Sofas & Couches</li>
                <li>Sectionals</li>
                <li>Ottomans & Poufs</li>
                <li>Accent Chairs</li>
                <li>Recliners </li>
                <li>Coffee & accent Tables</li>
                <li>TV Stands</li>
                
                <li className= {styles.firstElementinLIst}  >Patio & Outdoor Furniture</li>
                
                <li>Patio Furniture Sets</li>
                <li>Sofa, Chairs & Sectionals</li>
                <li>Dining Sets</li>
                <li>Chaise Lounges</li>
                <li>Adriondack Chairs</li>
                <li>Hammocks & Swings</li>
                <li>Outdoor Benches</li>
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst}  >Bedroom Furniture</li>
                <li>Beds</li>
                <li>Headboards</li>
                <li>Bed Frames</li>
                <li>Dresses & Chests</li>
                <li>Nighstands</li>
                <li>Armories & Wardobes</li>
                <li className= {styles.firstElementinLIst}  >Office Furniture</li>
                <li>Desks</li>
                <li>Office Chairs</li>
                <li>Small Space Desks</li>
                <li>Office Shelves & Storage</li>
                <li>File Cabinets</li>
                <li>Office & Conference Tables</li>
                <li>Bookshelves</li>
                <li>Gaming Chairs</li>
            </ul>
        </div>
    </div>
    </MenuItem>
    
  </MenuList>
</Menu>
        </div>
        </div>
    </div>
}