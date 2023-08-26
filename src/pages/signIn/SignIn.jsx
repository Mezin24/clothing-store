import { SignUpForm } from "components/signUpForm/SignUpForm"
import { createUserDocumentFromAuthData, signInWithGooglePopup } from "utils/firebase/config"


export const SignIn = () => {
  const signIn = async () => {
    const {user} = await signInWithGooglePopup()
    createUserDocumentFromAuthData(user)
  }

  return (
    <>
    <h1>SignIn</h1>
    <button onClick={signIn}>Sign In With Google Popup</button>
    <SignUpForm />
    </>
  )
}