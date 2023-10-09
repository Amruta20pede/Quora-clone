import React from 'react'
import './QuoraBox.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import {selectUser} from "../features/userSlice";

function QuoraBox() {
  const user=useSelector(selectUser);
  return (
    <div className='quoraBox'>
        <div classname='quoraBox_info'>
            <Avatar src={user.photo}/>
            <h5>{user.displayName}</h5>
        </div>
        <div className='quoraBox_quora'>
            <p> What is your question or link?</p>
        </div>
    </div>
  )
}

export default QuoraBox;