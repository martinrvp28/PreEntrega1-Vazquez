
import React, { createContext, useState, useEffect } from 'react';
import { auth} from '../Firebase/database';
import { signOut} from 'firebase/auth';
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase/database';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({username:'', loggedIn:false});

    const [newName, setNewName] = useState();
    const [newPhone, setNewPhone] = useState();
    const [newAdress, setNewAdress] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
      const userDb = async () => {

        setIsLoading(true);

      try {

          const collectionRef = collection(db, "users");
          const q = query(collectionRef, where("email", "==", user.username));
          const response = await getDocs(q);
          if (response.docs.length > 0) {
              const doc = response.docs[0];
              const userData = { id: doc.id, ...doc.data() };
              setNewName(userData.name);
              setNewPhone(userData.phone);
              setNewAdress(userData.adress);
          } 

          } catch (error) {
              console.error("Error al obtener el usuario:", error);
          } finally {
            setIsLoading(false);
          }

          
      };
  
      userDb();
      
  },[isChanging,user]);

  


    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    const logOut = () => {

      signOut(auth);
      const clean = {username:'', loggedIn:false}
      setUser(clean);
      localStorage.removeItem('user');
    }

      return (
        <AuthContext.Provider value={{user, newPhone, newAdress, newName, isLoading, isChanging, setIsChanging, setIsLoading, setUser, setNewPhone, setNewAdress, setNewName, logOut}}>
          {children}
        </AuthContext.Provider>
      );
    };