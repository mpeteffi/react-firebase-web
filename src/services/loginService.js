import firebase from '../config/firebase'
const auth = firebase.auth

const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)
const signOut = () => auth.signOut()

export default {
  signIn,
  signOut,
}
