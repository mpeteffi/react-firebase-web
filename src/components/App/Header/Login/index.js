import React, { Component } from 'react'
import { Button, TextField, Dialog } from 'material-ui'
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog'
import loginService from 'services/loginService'

import CloseIcon from 'mdi-react/CloseIcon'
import AccountIcon from 'mdi-react/AccountIcon'

import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openDialog: false,
      error: {},
      email: '',
      password: '',
    }

    this.login = this.login.bind(this)
    this.toggle = this.toggle.bind(this)
    this.cancel = this.cancel.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  toggle() { this.setState({ openDialog: !this.state.openDialog }) }
  updateEmail(evt) { this.setState({ email: evt.target.value }) }
  updatePassword(evt) { this.setState({ password: evt.target.value }) }

  isFormValid() {
   return !this.state.error.email && !this.state.error.password
  }

  async validateForm() {
    let errorState = {}
    if (!this.state.email) errorState.email = 'Digite um e-mail válido'
    if (!this.state.password) errorState.password = 'Digite sua senha'
    await this.setState({ error: errorState })
  }

  cancel() {
    this.setState({ email: '', password: '' })
    this.toggle()
  }

  async login() {
    await this.validateForm()
    if (this.isFormValid()) {
      const { email, password } = this.state
      loginService.signIn(email, password)
        .then(() => {
          this.cancel()
          this.toggle()
        })
        .catch(err => {
          if ('auth/user-not-found' === err.code) this.setState({ error: { email: 'Email não cadastrado'} })
          if ('auth/wrong-password' === err.code) this.setState({ error: { password: 'Senha incorreta'} })
        })
    }
  }

  render() {
    const logoutButton = (
      <div>
        <Button color='inherit' onClick={ () => loginService.signOut() }>
          <CloseIcon className='login__icon' /> { 'Deslogar' }
        </Button>
      </div>
    )
    const loginButton = (
      <div>
        <Button color='inherit' onClick={ this.toggle }>
          <AccountIcon className='login__icon' /> { 'Login' }
        </Button>
        <Dialog
          open={ this.state.openDialog }
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Insira suas credenciais para que possamos continuar com o login.
            </DialogContentText>
            <TextField fullWidth required autoFocus placeholder='teste@gmail.com'
              margin='dense' id='inputEmail' label='Email' type='email'
              value={ this.state.email } onChange={ evt => this.updateEmail(evt) }
              error={ !!this.state.error.email } helperText={ this.state.error.email }
            />
            <TextField fullWidth required placeholder='abc123'
              margin='dense' id='inputPassword' label='Password' type='password'
              value={ this.state.password } onChange={ evt => this.updatePassword(evt) }
              error={ !!this.state.error.password } helperText={ this.state.error.password }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={ this.cancel } color='primary'>
              Cancel
            </Button>
            <Button onClick={ this.login } color='primary'>
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
    return this.props.authUser ? logoutButton : loginButton
  }
}

export default Login
