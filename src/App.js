import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";


import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Success from "./components/Cart/Success";
import Failed from "./components/Cart/Failed"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import LoginSignUp from "./components/Header/LoginSignUp/LoginSignUp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AppContext> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login/" element={<LoginSignUp/>} />
          <Route path="/login/" element={<LoginSignUp/>} />
          <Route path="/success/" element={<Success/>} />
          <Route path="/failed/" element={<Failed/>} />
        </Routes>
        
        <Footer />
      </AppContext>
      <ToastContainer/>

    </BrowserRouter>
    
  );
}

export default App;
