import Lista from '../components/pages/Lista'
import Cadastro from '../components/pages/Cadastro'

const publicRoutes = [
  { link: '/lista', name: 'Lista', component: Lista },
]

const privateRoutes = [
  { link: '/cadastro', name: 'cadastro', component: Cadastro },
]

publicRoutes.forEach(r => r.isSafe = false)
privateRoutes.forEach(r => r.isSafe = true)
export default [ ...publicRoutes, ...privateRoutes ]
