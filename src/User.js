import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addUser, increment } from './cartSlice';
import { useState } from 'react';

const User = () => {
    const [increment,setIncrement]=useState('hurtyhn')
    const userselector=useSelector((state)=>state.users.value);

    const dispatch=useDispatch();
    console.log(userselector,'user data')
  return (
    <div>

        <button onClick={()=>dispatch(increment())}>increment</button>
        {/* <button onClick={(e)=>dispatch(addUser(e.target.value))}>Add</button> */}

        {/* <p >{increment}</p> */}

        
    </div>
  )
}

export default User