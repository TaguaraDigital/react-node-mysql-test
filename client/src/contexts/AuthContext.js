import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [msgMio, setMsgMio] = useState('vamos a ver');
   const [loading, setLoading] = useState(true)

  const getUser = async ({ id, email, password }) => {
    const response = await fetch(`http://localhost:4500/login/`,
        { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    const data = await response.json()

    if (data.status === 200) {
      setCurrentUser({ id: data.userId, email, password })
      setMsgMio(data.message)
    }
    else {
      setMsgMio(data.message)
    }
    console.log(data.status, '3', data.message)

   
    return data.message
  }

  const userLogout = () => {
    setCurrentUser({})
  };

  const value = {
    currentUser,
    msgMio,
    getUser,
    userLogout
  };

  return (
    <AuthContext.Provider value={value}>
      {/* {!loading && children} */}
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;