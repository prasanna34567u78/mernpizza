import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../Actions/userAction';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

export default function LoginScreen() {
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const dispatch = useDispatch()
    const loginState= useSelector(state=>state.loginUserReducer)
    const {loading, error} = loginState
    console.log(loginState)
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href='/';
        }
    },[])
    function login(){
        const user={
            
            email,
            password
        }
        dispatch(loginUser(user))
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded" >
                    <h2 className='text-center m-2' style={{fontSize:"35px"}}>Login</h2>
                    {loading && (<Loading/>)}
                    {error && (<Error error='Invalid credictal'/>)}
                    <div>
                         
                        <input type="email" placeholder='email' className='form-control' 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                        />
                        <input type="text" placeholder='password' className='form-control' 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required
                        />
                       
                        <button className='btn mt-3 mb-3' onClick={login} >LOGIN</button>
                        <br />
                        <a href="/register" style={{color:"black"}}>Click here to register</a>
                    </div>
                </div>
            </div>
        </div>
      )
}
