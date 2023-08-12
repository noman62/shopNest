import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './components/product/ProductList'
import ProductView from './components/product/ProductView'
import Cart from './components/cart/Cart'
import AdminDashboard from './components/admin/AdminDashboard'
import SignUp from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/product' exact Component={ProductList} />
        <Route path='/productview' exact Component={ProductView} />
        <Route path='/cartview' Component={Cart}/>
        <Route path='/admin' Component={AdminDashboard}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/login' Component={Login}/>
      </Routes>

    </Router>
  )
}

export default App
