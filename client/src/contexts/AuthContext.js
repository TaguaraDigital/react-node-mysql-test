import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [recibos, setRecibos] = useState(null)
  const [recibosAll, setRecibosAll] = useState(null)
  const [monto, setMonto] = useState(0);


  const [msg, setMsg] = useState('');
  
  const getUser = async ({ email, password }) => {
    
    const response = await fetch(`http://localhost:4500/login/`,
    { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    const data = await response.json()
    
    if (data.status === 200) {
      setCurrentUser((prevUser) => prevUser = { id: data.userId, email, password, saldo: data.saldo })
    }
    
    setMsg((prevMsg) => prevMsg = data.message)
    
    return data.message
  }

  const createUser = async ({ email, password }) => {

    const response = await fetch(`http://localhost:4500/create/`,
    { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    const data = await response.json()
    
    if (data.status === 200) {
      setCurrentUser((prevUser) => prevUser = { id: data.userId, email, password })
    }
    
    // setMsg((prevMsg) => prevMsg = data.message)

    // console.log(data.message)
    
    // return data.message
  }

  const userLogout = () => {
    setCurrentUser({})
  };

  const value = {
    currentUser,
    msg,
    recibos,
    setRecibos,
    monto,
    setMonto,
    recibosAll,
    setRecibosAll,
    getUser,
    createUser,
    userLogout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;

/*
import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    const addRestaurants = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant])
    }

    const value = {
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant
    }
    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    )

}
*/