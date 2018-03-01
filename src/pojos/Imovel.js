class Imovel {
  constructor(options) {
    this.id = options.id
    this.banheiros = options.banheiros
    this.dormitorios = options.dormitorios
    this.condominio = options.condominio
    this.aluguel = options.aluguel
    this.endereco = options.endereco
    this.cidade = options.cidade
  }

  updateBanheiros(value) { this.banheiros = value }
  updateDormitorios(value) { this.dormitorios = value }
  updateCondominio(value) { this.condominio = value }
  updateAluguel(value) { this.aluguel = value }
  updateEndereco(value) { this.endereco = value }
  updateCidade(value) { this.cidade = value }
}

module.exports = Imovel
