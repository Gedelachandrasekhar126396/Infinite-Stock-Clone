import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductsPage from "../Pages/ProductsPage";
import Signup from "../Pages/SignupPage"
export default function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/products" element={<ProductsPage/>} ></Route>
        <Route path="/products/:id"  ></Route>
    </Routes>
    </>
}