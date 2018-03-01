import React, { Component } from 'react'
import { Card, TextField } from 'material-ui'
import { CardContent, CardMedia } from 'material-ui/Card'
import defaultImage from 'assets/default-image.jpg'
import Imovel from 'pojos/Imovel'

import CheckIcon from 'mdi-react/CheckIcon'
import CancelIcon from 'mdi-react/CancelIcon'
import BorderColorIcon from 'mdi-react/BorderColorIcon'

import './imovelEditCard.css'

// TODO: buscar melhor modo de copiar sem manter referência
const getImovelCopy = (imovel) => new Imovel(JSON.parse(JSON.stringify(imovel)))

class ImovelEditCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false,
      imovel: props.imovel,
      originalImovel: getImovelCopy(props.imovel),
    }

    this.updateBanheiros = this.updateBanheiros.bind(this)
    this.updateDormitorios = this.updateDormitorios.bind(this)
    this.updateCondominio = this.updateCondominio.bind(this)
    this.updateAluguel = this.updateAluguel.bind(this)
    this.updateEndereco = this.updateEndereco.bind(this)
    this.updateCidade = this.updateCidade.bind(this)

    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
  }


  edit() { this.setState({ edit: true }) }

  save() {
    this.setState({ edit: false })
  }

  cancel() {
    this.setState({
      edit: false,
      imovel: getImovelCopy(this.state.originalImovel),
    })
  }

  updateBanheiros(evt) {
    const imovel = this.state.imovel
    imovel.updateBanheiros(evt.target.value)
    this.setState({ imovel })
  }

  updateDormitorios(evt) {
    const imovel = this.state.imovel
    imovel.updateDormitorios(evt.target.value)
    this.setState({ imovel })
  }

  updateCondominio(evt) {
    const imovel = this.state.imovel
    imovel.updateCondominio(evt.target.value)
    this.setState({ imovel })
  }

  updateAluguel(evt) {
    const imovel = this.state.imovel
    imovel.updateAluguel(evt.target.value)
    this.setState({ imovel })
  }

  updateEndereco(evt) {
    const imovel = this.state.imovel
    imovel.updateEndereco(evt.target.value)
    this.setState({ imovel })
  }

  updateCidade(evt) {
    const imovel = this.state.imovel
    imovel.updateCidade(evt.target.value)
    this.setState({ imovel })
  }

  render() {
    const buildInput = (_value, _onChange, _id, _label) => (
      <TextField disabled={ !this.state.edit } required className='textField'
        margin='dense' id={ _id } label={ _label } type='text'
        value={ _value } onChange={ evt => _onChange(evt) }
      />
    )

    const getIcons = () => !this.state.edit
      ? ( <BorderColorIcon className='imovelEditCard__icon edit--color' onClick={ () => this.edit() } /> )
      : ( <div className='imovelEditCard__icon'>
            <CancelIcon className='cancel--color' onClick={ this.cancel } />
            <CheckIcon className='check--color' onClick={ this.save } />
          </div> )

    return (
      <div>
        <Card className='imovelEditCard__card'>
          { getIcons() }
          <CardMedia
            className='imovelEditCard__card__image'
            image={ defaultImage }
            title='Live from space album cover'
          />
          <CardContent className='imovelEditCard__card__content'>
            <div className='imovelEditCard__card__content__row'>
              { buildInput(this.state.imovel.cidade, this.updateCidade, 'inputCidade', 'Cidade') }
              { buildInput(this.state.imovel.endereco, this.updateEndereco, 'inputEndereco', 'Endereço') }
            </div>
            <div className='imovelEditCard__card__content__row'>
              <div className='imovelEditCard__card__content__row--group'>
                { buildInput(this.state.imovel.aluguel, this.updateAluguel, 'inputAluguel', 'Aluguel') }
                { buildInput(this.state.imovel.condominio, this.updateCondominio, 'inputCondominio', 'Condomínio') }
              </div>
              <div className='imovelEditCard__card__content__row--group'>
                { buildInput(this.state.imovel.dormitorios, this.updateDormitorios, 'inputDormitorio', 'Dormitórios') }
                { buildInput(this.state.imovel.banheiros, this.updateBanheiros, 'inputBanheiro', 'Banheiros') }
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default ImovelEditCard
