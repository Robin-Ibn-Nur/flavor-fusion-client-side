import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import LazyLoad, { lazyload } from 'react-lazyload';


export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [dark, setDark] = useState(false);

    const handleDark = () => {
        setDark(!dark)
        localStorage.setItem("dark-mode", !dark)
    }

    useEffect(() => {
        if (dark) {
            document.querySelector("html").setAttribute("data-theme", "dark");
        }
        else {
            document.querySelector("html").setAttribute("data-theme", "white")
        }
    }, [dark]);

    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem("dark-mode"))
        console.log(localDark);
        setDark(localDark)
    },[])



    lazyload({
        height: 200,
        once: true,
        offset: 100,
        scroll
    })

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGitHub = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const upDateUserData = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser)
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        handleDark,
        loading,
        creatUser,
        register,
        signInWithGoogle,
        logOut,
        signInWithGitHub,
        resetPassword,
        upDateUserData,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            <LazyLoad>
                {children}
            </LazyLoad>

        </AuthContext.Provider>
    );
};

export default AuthProvider;