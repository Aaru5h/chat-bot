'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div>
        <form>
            <input type = "email" placeholder='Enter a valid mail address'/>
            <input type='password' placeholder='Enter a password'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp