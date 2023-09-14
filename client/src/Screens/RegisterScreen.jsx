import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../Actions/userAction';
import Loading from '../Components/Loading';
import Success from '../Components/Success';
import Error from '../Components/Error';

export default function RegisterScreen() {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [confirm,setConfirm] = useState("");
    const dispatch = useDispatch();
    const registerState = useSelector(state=>state.registerUserReducer)
    const {error,loading,success} = registerState
    console.log(registerState);

    function register(){
        if(password!==confirm){
            alert(`confirm password does not match with password`)
        }else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
          
        }
    }

  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded
            ">
                 {loading && (<Loading/>)}
                {error && (<Error error='Email Already exists' />)}
                {success && (<Success success='User register successfully'/>)}
                <h2 className='text-center m-2' style={{fontSize:"35px"}}>Register</h2>
               

                <div>
                        <input type="text"  placeholder='name' className='form-control' 
                    value={name}
                         onChange={(e)=>{setName(e.target.value)}}
                    required
                    />
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
                    <input type="password" placeholder='confirm password' className='form-control'
                    value={confirm}
                    onChange={(e)=>{setConfirm(e.target.value)}}
                    required
                    />
                    <button className='btn mt-3 mb-3'  onClick={register}>REGISTER</button>
                    <br />
                        <a href="/login" style={{color:"black"}}>Click here to Login</a>
                </div>
            </div>
        </div>
    </div>
  )
}
