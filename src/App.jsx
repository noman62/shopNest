import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './components/product/ProductList'
import ProductView from './components/product/ProductView'
import Header from './components/common/Navbar'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/product' exact Component={ProductList} />
        <Route path='/productview' exact Component={ProductView} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
