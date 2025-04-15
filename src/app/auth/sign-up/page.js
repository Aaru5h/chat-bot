'use client'
import React, { useState, useContext } from 'react'
import Link from 'next/link'
// import { signup } from '@/services/auth' // optional
import { AuthContext } from '@/context/auth' 

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLogged } = useContext(AuthContext) // optional

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signup({ email, password }) // optional
      console.log('Signup response:', res)

      if (res.success) {
        setIsLogged(true)
      }
    } catch (err) {
      console.error('Signup error:', err)
    }
  }

  return (
    <div>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter a valid mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>

        <p style={{ marginTop: '1rem' }}>
          If you already have an account,{' '}
          <Link href="/auth/login" style={{ color: 'blue', textDecoration: 'underline' }}>
            Log In
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp
