import firebase from '../config/firebase'

let _imoveis = []

// const cleanCache = () => {
//   _imoveis = []
// }

const getAll = async () => {
  // TODO: pensar em solução de cache
  if (!_imoveis.length) {
    const result = await firebase.db.collection('imoveis').get()
    // TODO: pensar em estratégia para transformar retorno em pojos
    result.forEach(i => {
      const im = i.data()
      im.id = i.id
      _imoveis.push(im)
    })
  }
  return _imoveis
}

export default {
  getAll,
}
