import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

import logo from './gb.svg';
import { Context } from '../../Context/Context';
const Login = () => {

    const navigate = useNavigate()
        const emailRef = useRef();
        const passRef = useRef();

        const {dispatch, isFetching} = useContext(Context);
   const handleSubmit = async ()=>{
        dispatch({type:'LOGIN_START'});
        const loginCred = {
            email:emailRef.current.value,
            password:passRef.current.value
        }
        console.log('inside submit');
        try {
            const res = await axios.post('http://localhost:5000/api/register/auth',loginCred);
            // alert('ceredentials are correct');
            toast.success('Logged In successfully');
            // window.location.replace('/dash');
            // console.log(user.data);
            dispatch({type:'LOGIN_SUCCESS',payload:res.data});
            navigate('/dash');
        } catch (error) {
            console.log(error);
            toast.error('Credentials are incorrect');
            dispatch({type:'LOGIN_Failure'});
        }

   }
  return (
    <div className="login-container">
        <div className="login-main-section">
            <div className="login-text-section">
                <div className="img">
                    <img src={logo} alt=""/>
                </div>
                    <h2> Group 2</h2>
            </div>
            <div className="login-section">
               <div className="loginheader">
               <img src={logo} alt="" />
               <h4> 
                    <p>C o l l e g e</p>
                </h4>
                
                </div> 
                <h6>Welcome to Interswitch College</h6>
                <p>Login to access portal</p>
                <form>
                    <input  type="text" placeholder="Name or Email" ref={emailRef}/>
                    <input type="password" placeholder="Password" ref={passRef}/>
                    <div className="forget-pass">
                        <a href="">Forget Your Password?</a>
                    </div>
                    <div className="log-sec">
                        {/* <Link to='/dashboard/dash'> */}
                        <span value="LOGIN" onClick={handleSubmit}>Login</span>
                        {/* </Link> */}
                    </div>
                    <div className="sign-link">
                        <h3>Don't have any account?</h3>
                        <span><Link to='/signup'>Signup Now</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login