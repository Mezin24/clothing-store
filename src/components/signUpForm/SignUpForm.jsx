import { FormInput } from "components/UI/formInput/FormInput";
import { useState } from "react";
import {createUserDocWithEmailAndPassword, createUserDocumentFromAuthData} from 'utils/firebase/config'

const defaultValue = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultValue);
  const {displayName, email, password, confirmPassword} = formFields
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormFields(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async(e )=> {
    e.preventDefault()
    if (!displayName || !email || !password) return 

    if ((password !== confirmPassword)) {
      alert('Password do not match')
      return 
    }
    
    try {
      const {user} = await createUserDocWithEmailAndPassword(email, password)
      createUserDocumentFromAuthData({...user, displayName})
      setFormFields(defaultValue)
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }
      console.log(error)
    }
  }
  
  return (
    <div>
      <h1>Sign in with email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Display name'
          type="text" 
          onChange={handleChange} 
          value={displayName} 
          name="displayName" 
          required
        />
        <FormInput 
          label='Email' 
          type="email" 
          onChange={handleChange} 
          value={email} 
          name="email" 
          required
          />
        <FormInput 
          label='Password' 
          type="password" 
          onChange={handleChange} 
          value={password} 
          name="password" 
          required
        />
          <FormInput 
          label='Confirm password' 
          type="password" 
          onChange={handleChange} 
          value={confirmPassword} 
          name="confirmPassword" 
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}