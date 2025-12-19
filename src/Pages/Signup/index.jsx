import React, {useState} from 'react'
import './index.css'
export default function Signup() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        success: '',
        loading: false,
    })  

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)

    }

    const checkValidation = () => {
        if (user.name === '' || user.email === '' || user.password === '' || user.confirmPassword === '') {
            setUser({...user, error: 'All fields are required'})
        } else if (user.password !== user.confirmPassword) {
            setUser({...user, error: 'Password and Confirm Password do not match'})
        } else {
            setUser({...user, error: ''})
        }
    }

    const handleSignup = () => {
        checkValidation()
        if (user.error === '') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        setUser({...user, loading: true})
        setTimeout(() => {
            setUser({...user, loading: false, success: 'Signup successful'})
        }, 2000)
    }

  return (
    <div className='signup-container'>
        <div>Signup</div>
        <div className='signup-form'>
            <input type="text" placeholder='Name' name="name" value={user.name} onChange={(e) => handleChange(e)} />
            <input type="email" placeholder='Email' name="email" value={user.email} onChange={(e) => handleChange(e)} />
            <input type="password" placeholder='Password' name="password" value={user.password} onChange={(e) => handleChange(e)} />
            <input type="password" placeholder='Confirm Password' name="confirmPassword" value={user.confirmPassword} onChange={(e) => handleChange(e)} />
            <button onClick={handleSignup}>Signup</button>
        </div>





        {user.error && <div className='error'>{user.error}</div>}
        {user.success && <div className='success'>{user.success}</div>}
        {user.loading && <div className='loading'>Loading...</div>}
    </div>
  )
}