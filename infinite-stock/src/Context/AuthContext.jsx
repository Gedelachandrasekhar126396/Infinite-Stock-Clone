import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export default function AppContextProvider({children}){
    const [isAuth,setAuth] = useState(false);
    const [data,setData] = useState([])
    const navigate = useNavigate()

    const Login =(email,pass)=>{
        let flag = false;
        for(let i=0;i<data.length;i++){
            if(data[i].email===email && data[i].password===pass){
                setAuth(!isAuth)
                flag = true
            }
        }
        flag ? navigate("/") : alert(`Invalid credentials`)
        
        console.log(email,pass,data)

    }
    const Logout =()=>{
        setAuth(false)
    }
    function SignUp(email,password){
        axios({
          url:"https://basic-api-list.herokuapp.com/users",
          method:"POST",
          data:{
            email:email,
            password:password
          }
        }).then(()=>getData())
      }
      function getData(){
        axios.get("https://basic-api-list.herokuapp.com/users")
        .then(res =>{
          console.log(res.data)
          setData(res.data)
        } )
      }
  
    const value = {isAuth,Login,Logout,SignUp,data}
    return <AuthContext.Provider value={value} >{children} </AuthContext.Provider>
}