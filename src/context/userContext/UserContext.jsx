import { createContext, useMemo, useState, useEffect, useReducer } from "react";
import { authObserver, createUserDocumentFromAuthData } from "utils/firebase/config";
import { createAction } from "utils/reducer/reducer";

export const UserContext = createContext({
  user: null,
  setUser: () => null
}) 

const INITIAL_STATE = {
  user: null
}

const USER_REDUCER_ACTIONS = {
  SET_USER: 'SET_USER'
}

const userReducer = (state, action) => {
  const {type, payload} = action

  switch (type) {
    case USER_REDUCER_ACTIONS.SET_USER:
      return {
        ...state,
        user: payload
      }
  
    default:
      throw Error(`Invalid action type: ${type}`)
  }
}


export const UserContextProvider = ({children}) => {
  const [{user}, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const setUser = (user) => dispatch(createAction( USER_REDUCER_ACTIONS.SET_USER, user))

  useEffect(() => {
    const unsubscribe = authObserver(user => {
      if (user) {
        createUserDocumentFromAuthData(user)
      }
      setUser(user)
    })
    
    return unsubscribe
  }, []);
  
  const value = useMemo(() => ({
    user,
    setUser
  }), [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}