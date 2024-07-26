import React from 'react';
import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './Profile.scss';
import { VscHome } from "react-icons/vsc";
// import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LuContact2 } from "react-icons/lu";
import { LuLogIn } from "react-icons/lu";
import { CgLogOut } from "react-icons/cg";
import { HiShoppingBag } from "react-icons/hi2";
import {userData} from '../../../utils/userData'


const Profile = ({ setShowProfile }) => {

 const {username} = userData();
 console.log({username});
  const navigate = useNavigate()

  const HandleLogout = ()=>{
     
    localStorage.setItem("user","");
    window.location.reload();
     navigate('/');

}


  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">{username}</span>
          <span className="close-btn" onClick={() => setShowProfile(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        <div className="cart-list">
        <ul className="lists">
          <li className="nav-link" onClick={()=>{
            navigate('/');
            setShowProfile(false);
            }}>
          <VscHome />
          <span className="nav-text" >Home</span> 
          </li>

          <li className="nav-link">
          <HiShoppingBag />
              <span className="nav-text">Orders</span>
          </li>

          <li className="nav-link">
          <LuContact2 />
              <span className="nav-text">Contact Us</span>
          </li>

          <li className="nav-link" onClick={()=>{
            navigate("/login");
            setShowProfile(false);
        }}>
          <LuLogIn />
              <span className="nav-text">Login / Sign Up</span>
          </li>
          <li className="nav-link" onClick={HandleLogout}>
          <CgLogOut />
              <span className="nav-text" >Logout</span>
          </li>
          </ul>
         
         
          {/* <div className="textt" onClick={()=>{
            navigate("/login");
            setShowProfile(false);
        }}>Login / Sign Up</div> */}
        </div>
        </div>
        </div>
  )
}

export default Profile