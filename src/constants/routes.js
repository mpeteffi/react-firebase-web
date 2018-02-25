import Deslogada from '../components/pages/Deslogada'
import LogadaUm from '../components/pages/LogadaUm'
import LogadaDois from '../components/pages/LogadaDois'

const publicRoutes = [
  { link: '/deslogada', name: 'Deslogada', component: Deslogada },
]

const privateRoutes = [
  { link: '/logada-1', name: 'Logada Um', component: LogadaUm },
  { link: '/logada-2', name: 'Logada Dois', component: LogadaDois },
]

publicRoutes.forEach(r => r.isSafe = false)
privateRoutes.forEach(r => r.isSafe = true)
export default [ ...publicRoutes, ...privateRoutes ]
