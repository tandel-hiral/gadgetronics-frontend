import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs"

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import LoginSignUp from "./LoginSignUp/LoginSignUp";
import { Context } from "../../utils/context";
import Profile from "./Profile/Profile";

import "./Header.scss";

const Header = () => {

  const {cartCount} = useContext(Context);

    const [showCart , setShowCart] = useState(false);
    const [showSearch , setShowSearch] = useState(false);
    const [showProfile , setShowProfile] = useState(false);
   
    const navigate = useNavigate()
    const [showLogin , setShowLogin] = useState(false);

  const toggleLogin = () => {
    // 👇️ passed function to setState
    setShowLogin(current => !current);
  };

  useEffect(() => {
    if (showLogin) {
      navigate("/login")
    }
    else{
      navigate("/")
    }
  }, [showLogin]);

  const handleScroll = () => {
    let headerBar = document.getElementById("headerBar");

    if (window.scrollY > 75) {
      headerBar.classList.add("sticky-header");
    } else {
      headerBar.classList.remove("sticky-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className="main-header" id="headerBar">
      <div className="header-content">
        <ul className="left">
          <li onClick={()=>{
            navigate("/");
            setShowLogin(false);
            }}>Home</li>
          {/* <li>About</li>
          <li>Categories</li> */}
        </ul>
        <div className="center" onClick={()=>navigate("/")}>Gadgetronics
</div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon" onClick={()=>setShowCart(true)}>
            <CgShoppingCart />
            {!!cartCount && <span>{cartCount}</span>}
          </span>
          
          {/* <BsFillPersonFill onClick={toggleLogin}/> */}
          <BsFillPersonFill onClick={()=>setShowProfile(true)}/>
  
        </div>
      </div>
    </header>
  { showCart && <Cart setShowCart={setShowCart}/> }
  {showSearch && <Search setShowSearch={setShowSearch}/> }
  {showProfile && <Profile setShowProfile={setShowProfile}/> }
  
  

    </>
  );
};

export default Header;
