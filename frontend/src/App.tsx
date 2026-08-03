import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Payment } from "./pages/Payment";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Admin } from "./pages/Admin";
import { TrackOrder } from "./pages/TrackOrder";
import { About } from "./pages/About";
import { HappyCustomers } from "./pages/HappyCustomers";
import { Categories } from "./pages/Categories";
import { FAQ } from "./pages/FAQ";
export default function App(){return <Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/categories" element={<Categories/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/about" element={<About/>}/><Route path="/happy-customers" element={<HappyCustomers/>}/><Route path="/testimonials" element={<HappyCustomers/>}/><Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/payment" element={<Payment/>}/><Route path="/login" element={<Auth/>}/><Route path="/dashboard" element={<Dashboard/>}/><Route path="/profile" element={<Dashboard/>}/><Route path="/admin" element={<Admin/>}/><Route path="/track-order" element={<TrackOrder/>}/><Route path="*" element={<Home/>}/></Route></Routes>}
