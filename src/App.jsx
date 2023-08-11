import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./components/product/ProductList";



const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/product" exact Component={ProductList}/>
      </Routes>
    </Router>
  )
}

export default App;