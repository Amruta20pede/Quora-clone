import React, { useEffect } from 'react';
import './App.css';
import Quora from './component/Quora';
import Login from '../src/component/auth/Login'
import { useSelector ,useDispatch} from 'react-redux';
import {login,selectUser,logout} from "./features/userSlice"
import {auth} from "./firebase"

function App() {
  const user=useSelector(selectUser);
  const dispatch =useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          displayName:authUser.displayName,
          email:authUser.email
        }));
        console.log(authUser);
      }else{
        dispatch(logout());
      }
    })
    
  },[dispatch]);

  return (
    <div className="App">
      {
        user ?(<Quora/>) :(<Login/>)
      }
      
    </div>
  );
}

export default App;
