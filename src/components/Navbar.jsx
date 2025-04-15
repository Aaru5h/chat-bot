'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { Bell } from 'lucide-react'
import styles from './Navbar.module.css'
import { AuthContext } from '@/context/auth'

const Navbar = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about-us">About</Link>
      <Link href="/dashboard">Dashboard</Link>

      {isLogged ? (
        <button className={styles.iconButton} title="Notifications">
          <Bell size={20} />
        </button>
      ) : (
        <Link href="/auth/login" className={styles.loginButton}>
          Log In
        </Link>
      )}
    </nav>
  )
}

export default Navbar
