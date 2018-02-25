import React, { Component } from 'react'
import imovelService from '../../../services/imovelService'

import ImovelEditCard from './ImovelEditCard'

class Cadastro extends Component {
  constructor(props) {
    super(props)

    this.state = { imoveis: [] }
    this.getImoveis()
  }

  async getImoveis() {
    const imoveis = await imovelService.getAll()
    this.setState({ imoveis })
  }

  render() {
    return (
      <div>
        {
          this.state.imoveis.map(i => <ImovelEditCard key={ i.id } imovel={ i } />)
        }
      </div>
    )
  }
}

export default Cadastro
