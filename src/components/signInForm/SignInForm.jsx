import { BUTTON_THEME, Button } from "components/UI/button/Button";
import { FormInput } from "components/UI/formInput/FormInput";
import { useState } from "react";
import {
  signInWithGooglePopup, 
  createUserDocumentFromAuthData, 
  signInUserWithEmailAndPassword
} from 'utils/firebase/config'
import './signInForm.scss'

const defaultValue = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultValue);
  const { email, password, } = formFields
  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup()
    createUserDocumentFromAuthData(user)
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormFields(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async(e )=> {
    e.preventDefault()
    if ( !email || !password) return 
    
    try {
      const {user} = await signInUserWithEmailAndPassword(email, password)
      console.log(user)
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password for this email')
          break;
        case 'auth/user-not-found':
          alert('User not found')
          break;
        case 'auth/too-many-requests':
          alert('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.')
          break;
        default:
          console.log(error)
          break;
      }
  }
}
  
  return (
    <div className="form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password?</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button 
            onClick={signInWithGoogle} 
            type="button" 
            buttonTheme={BUTTON_THEME.google}
          >
          Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}