'use client'
import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLogged')
    if (storedLogin === 'true') {
      setIsLogged(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isLogged', isLogged)
  }, [isLogged])

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  )
}
