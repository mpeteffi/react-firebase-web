import config from '../../constants/firebase'
import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()

export default {
  auth,
  db,
}
