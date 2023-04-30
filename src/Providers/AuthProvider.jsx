/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';

export  const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [rooms, setRooms] = useState([])
    const [places, setPlaces]= useState([])
    useEffect(() => {
        fetch('http://localhost:3000/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    
    useEffect(() => {
        fetch('http://localhost:3000/places')
            .then(res => res.json())
        .then(data=>setPlaces(data))
    }, [])
    const authInfo = {
        rooms,
        places
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;