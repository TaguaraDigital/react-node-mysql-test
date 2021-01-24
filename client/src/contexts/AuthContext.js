import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [msg, setMsg] = useState('');
  
  const getUser = async ({ id, email, password }) => {

    const response = await fetch(`http://localhost:4500/login/`,
    { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    const data = await response.json()
    
    if (data.status === 200) {
      setCurrentUser((prevUser) => prevUser = { id: data.userId, email, password })
    }
    
    setMsg((prevMsg) => prevMsg = data.message)
    
    return data.message
  }

  const userLogout = () => {
    setCurrentUser({})
  };

  const value = {
    currentUser,
    msg,
    getUser,
    userLogout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;