import React , {useState} from 'react'
import './LoginSignUp.scss'
import { SiGmail } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import axios from "axios";
import {toast} from "react-toastify"
import { Link, useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { storeUser } from '../../../utils/userData';



function LoginSignUp() {

  const initialUser = {password:"" , identifier:""}
const initialUserr = {password:"" , email:"" , username:""}


  const navigate = useNavigate();

  const [user , setUser] = useState(initialUser)
  const [userr , setUserr] = useState(initialUserr)

  const [action , setAction] = useState("Login");

  const handleChange = ({target}) =>{
    const {name , value} = target
    if(action=="Login"){
      setUser((currentUser)=>({
        ...currentUser,
        // [target.name] : target.value;
        [name] : value
    }));
    }
    else{
      setUserr((currentUser)=>({
        ...currentUser,
        // [target.name] : target.value;
        [name] : value
    }));
    }
    
};

const handleLogin = async()=>{
  // const url =`http://localhost:1337/api/auth/local`;
  const url =`${process.env.REACT_APP_BASE_URL}/api/auth/local`;
  try {
      if (user.identifier && user.password){
          const {data} = await axios.post(url, user) ; //here "data" and "identifier" are variable  we cant change the name of variable here
        //  console.log({data});
         
         if (data.jwt) {
          storeUser(data);
          toast.success('Logged in successfully',{
              hideProgressBar : true,
          });
          setUser(initialUser);
          window.location.reload();
          navigate('/')
         }
      }
      
  } catch (error) {
      console.log({error})
      toast.error("invalid input" , {
          hideProgressBar : true,
      }) ;
  }
};

const signUp = async() =>{
  try {
    // const url =`http://localhost:1337/api/auth/local/register`;
    const url =`${process.env.REACT_APP_BASE_URL}/api/auth/local/register`;
    if(userr.username && userr.email && userr.password){
      const res = await axios.post(url , userr);
      if(res){
        setUserr(initialUserr);
        toast.success('registered successfully',{
          hideProgressBar : true,
      });
        setAction("Login");
      }
      console.log(res);
    }
  } catch (error) {
    console.log({error})
    toast.error(error.message , {
        hideProgressBar : true,
    }) ;
  }
};


  return (
    <div className='mainContainer'>
    <div className='container'>
      <div className="header">
      <span className="close-icon" onClick={() =>navigate('/')}>
            <MdClose />
          </span>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <IoPersonSharp/>
          <input type="text" placeholder='Name' name="username" 
                value={userr.username} onChange={handleChange}/>
        </div>}
        
        <div className="input">
        <SiGmail/>
          <input type="email" placeholder='Email Id' name={action==="Login"?"identifier":"email"}
                value={action==="Login"? user.identifier :userr.email } onChange={handleChange}/>
        </div>
        <div className="input">
        <IoMdLock/>
          <input type="password" placeholder='Password' name="password"  
                 value={action==="Login"? user.password :userr.password } onChange={handleChange}/>
        </div>
      </div>
      {action=="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{
          setAction("Sign Up");
          signUp();
          }}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{
          setAction("Login");
          handleLogin()
          }}>Login</div>
      </div>
         
    </div>
    </div>
  )
}


// function LoginSignUp() {

//   const [action , setAction] = useState("Login");

//   return (
//     <div className='mainContainer'>
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action==="Login"?<div></div>:<div className="input">
//           <IoPersonSharp/>
//           <input type="text" placeholder='Name' />
//         </div>}
        
//         <div className="input">
//         <SiGmail/>
//           <input type="email" placeholder='Email Id' />
//         </div>
//         <div className="input">
//         <IoMdLock/>
//           <input type="password" placeholder='Password' />
//         </div>
//       </div>
//       {action=="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      
//       <div className="submit-container">
//         <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//       </div>
         
//     </div>
//     </div>
//   )
// }

export default LoginSignUp