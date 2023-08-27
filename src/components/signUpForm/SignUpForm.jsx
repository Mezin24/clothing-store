import { Button } from "components/UI/button/Button";
import { FormInput } from "components/UI/formInput/FormInput";
import { UserContext } from "context/userContext/UserContext";
import { memo, useCallback, useContext, useState } from "react";
import { createUserDocWithEmailAndPassword, createUserDocumentFromAuthData } from 'utils/firebase/config';

const defaultValue = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = memo(() => {
  const [formFields, setFormFields] = useState(defaultValue);
  const {displayName, email, password, confirmPassword} = formFields
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormFields(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = useCallback(async(e )=> {
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
  }, [confirmPassword, displayName, email, password])
  
  return (
    <div className="form-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Display Name'
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
          label='Confirm Password' 
          type="password" 
          onChange={handleChange} 
          value={confirmPassword} 
          name="confirmPassword" 
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
})