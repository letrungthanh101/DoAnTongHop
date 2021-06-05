import React, { useContext, useState, useEffect } from "react"
import firebase from "firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {

    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
  
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return firebase.auth().signOut()
  }

  function resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  function getInfoUser(){
    return currentUser
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      console.log("Thông tin user",JSON.stringify(user))
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    getInfoUser
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}