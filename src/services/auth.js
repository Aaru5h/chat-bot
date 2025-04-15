
export const signup = async ({ email, password }) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Sign-up failed')
      }
  
      const data = await response.json()
      return { success: true, data }
    } catch (error) {
      console.error('Sign up error:', error)
      return { success: false, error: error.message }
    }
  }
  
  export const login = async ({ email, password }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Login failed')
      }
  
      const data = await response.json()
      return { success: true, data }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    }
  }
  