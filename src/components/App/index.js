import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Reboot from 'material-ui/Reboot'
import firebase from '../../config/firebase'
import routes from '../../constants/routes'

import Header from './Header'
import Home from '../pages/Home'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { authUser: null }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState({ authUser, isFirebaseLoaded: true })
    })
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => {
      const renderFn = (props) => this.state.authUser ? <Component {...props} /> : <Redirect to='/' />
      return <Route { ...rest } render={ renderFn } />
    }

    return !this.state.isFirebaseLoaded ? 'loading...' : (
      <main>
        <Reboot />
        <Header authUser={ this.state.authUser } />
        <Switch>
          {
            routes.map(r => r.isSafe
              ? <PrivateRoute key={ r.link } exact path={ r.link } component={ r.component } />
              : <Route key={ r.link } exact path={ r.link } component={ r.component } />
            )
          }
          <Route component={Home} />
        </Switch>
      </main>
    )
  }
}

export default App