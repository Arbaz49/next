"use client"
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const User = () => {
  
    const router=useRouter();
    console.log("user",router.query.user)
  return (
    <div>
    <h1>Welcome {router.query.user}</h1>
    <Link className='test'  href={"/signup"}>Go To SignUp Page</Link>
    </div>
  )
}

export default User;
