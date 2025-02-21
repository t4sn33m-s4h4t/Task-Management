import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase'; 

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user); 
            setLoading(false); 
        });

        
        return () => unsubscribe();
    }, []); 

    
    const logout = async () => {
        try {
            await auth.signOut(); 
            setUser(null); 
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, loading, logout }}>
            {!loading && children}  
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);