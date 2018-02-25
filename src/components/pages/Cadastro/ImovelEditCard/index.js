import React, { Component } from 'react'
import { Card, TextField } from 'material-ui'
import { CardContent, CardMedia } from 'material-ui/Card'
import defaultImage from '../../../../assets/default-image.jpg'

import './imovelEditCard.css'

class ImovelEditCard extends Component {
  constructor(props) {
    super(props)

    this.state = { imovel: props.imovel }
  }

  render() {
    const buildInput = (_value, _id, _label) => (
      <TextField disabled required className='textField'
        margin='dense' id={ _id } label={ _label } type='text'
        value={ _value }
      />
    )
    return (
      <div>
        <Card className='imovelEditCard__card'>
          <CardMedia
            className='imovelEditCard__card__image'
            image={ defaultImage }
            title='Live from space album cover'
          />
          <CardContent className='imovelEditCard__card__content'>
            <div className='imovelEditCard__card__content__row'>
              { buildInput(this.state.imovel.cidade, 'inputCidade', 'Cidade') }
              { buildInput(this.state.imovel.endereco, 'inputEndereco', 'Endereço') }
            </div>
            <div className='imovelEditCard__card__content__row'>
              <div className='imovelEditCard__card__content__row--group'>
                { buildInput(this.state.imovel.aluguel, 'inputAluguel', 'Aluguel') }
                { buildInput(this.state.imovel.condominio, 'inputCondominio', 'Condomínio') }
              </div>
              <div className='imovelEditCard__card__content__row--group'>
                { buildInput(this.state.imovel.dormitorios, 'inputDormitorio', 'Dormitórios') }
                { buildInput(this.state.imovel.banheiros, 'inputBanheiro', 'Banheiros') }
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default ImovelEditCard
