import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const Login = () => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth() //call login function from auth context and assign it to varaiable auth

  const redirectPath = location.state?.path || '/'
//   if location is set to path navigate to that path else navigate to home

  const handleLogin = () => {
    auth.login(user) // call auth.login and pass user as argument
    navigate(redirectPath, { replace: true }) //{replace:true} le history clear gardinxa [login garera page back garda feri login page audaina]
  }
  return (
    <div>
      <label>
        Username: <input type='text' onChange={e => setUser(e.target.value)} />
      </label>{' '}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}