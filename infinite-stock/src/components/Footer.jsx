import styles from "../cssFiles/FooterDesign.module.css";


export default function Footer(){
    return<>
    <div className= {styles.Footer} >
        <div >
            <ul>
                <li className= {styles.firstElementinLIst}  >MY ACCOUNT</li>
                <li>Orders & Returns</li>
                <li>Email Preferences</li>
                <li>Account Settings</li>
                
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst} >LET US HELP</li>
                <li>Contact Customer Care</li>
                <li>Shipping Information</li>
                <li>Return Policy</li>
                <li>International Help</li>
                <li>Accessibility</li>
                
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst} >COMPANY INFORMATION</li>
                <li>About Overstock</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>Sell Your Products</li>
                <li>Supply Chain Transparency</li>
               
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst}  >MORE WAYS TO SHOP</li>
                <li>Tips % Ideas</li>
                <li>Deals</li>
                <li>Clearance</li>
                <li>New Arrivals</li>
            
            </ul>
        </div>
        
    </div>
    
    
    </>
}