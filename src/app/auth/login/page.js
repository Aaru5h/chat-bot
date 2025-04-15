'use client'
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/context/auth'
// import { login } from '@/services/auth' // if using a login service

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLogged } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await login({ email, password })
      console.log('Login response:', res)

      if (res.success) {
        setIsLogged(true)
      }

    } catch (err) {
      console.error('Login error:', err)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>

        <p style={{ marginTop: '1rem' }}>
          If you don't have an account,{' '}
          <Link href="/auth/sign-up" style={{ color: 'blue', textDecoration: 'underline' }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
