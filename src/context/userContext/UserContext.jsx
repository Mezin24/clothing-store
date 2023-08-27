import { createContext, useMemo, useState, useEffect } from "react";
import { authObserver, createUserDocumentFromAuthData } from "utils/firebase/config";

export const UserContext = createContext({
  user: null,
  setUser: () => null
}) 

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({
    user,
    setUser
  }), [user])

  useEffect(() => {
    const unsubscribe = authObserver(user => {
      if (user) {
        createUserDocumentFromAuthData(user)
      }
      setUser(user)
    })

    return unsubscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}