import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from 'material-ui'
import routes from '../../../constants/routes'

import Login from './Login'

import './header.css'

const Header = ({ authUser }) => (
  <div className='header'>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='title' color='inherit'>
          ReactFirebaseApp
        </Typography>
        <div className='header__icons'>
          {
            routes.map(r =>
              <Button key={ r.link } color='inherit' component={NavLink} to={ r.link }> { r.name } </Button>
            )
          }
        </div>
        <div className='header__right'>
          <Login authUser={ authUser }/>
        </div>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
