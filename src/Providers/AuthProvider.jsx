import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    //create user
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //logOut user
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    //google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    //gitHub login
    const githubProvider = new GithubAuthProvider();
    const gitHubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);
    }

    //activity
    useState(() =>{
        const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
            console.log('active', currentUser)
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unSubscrive();
        } 
        
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        googleLogin,
        gitHubLogin,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;