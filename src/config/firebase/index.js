import firebase from 'firebase'
import config from '../../constants/firebase'

if (!firebase.apps.length) firebase.initializeApp(config)

const auth = firebase.auth()

export default {
  auth,
}
