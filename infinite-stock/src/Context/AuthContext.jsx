import { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AppContextProvider({children}){
    const [isAuth,setAuth] = useState(false);
    const Login =()=>{
        setAuth(true);

    }
    const Logout =()=>{
        setAuth(false)
    }
    const value = {isAuth,Login,Logout}
    return <AuthContext.Provider value={value} >{children} </AuthContext.Provider>
}