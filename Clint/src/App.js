import './App.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';
import Navbar from './components/Home/Navbar';
import AppState from './components/context/appState';
import ProductPage from './components/ProductData/ProductPage';
import Signup from './components/Signup';
import SeperateProduct from './components/ProductData/SeperateProduct';
import CartPage from './components/Cart/CartPage';
import BuyNow from './components/Buying Process/BuyNow';
function App() {
  return (
    <AppState>
      <Router>
     <Switch>
       <Route exact path = "/">
         <Navbar />
         <Home/>
       </Route>
       <Route exact path = "/login">
         <Login />
       </Route>
       <Route exact path = "/signup">
         <Signup />
       </Route>
       <Route exact path = "/productpage">
      <Navbar />
       <ProductPage/>
       </Route>
       <Route exact path = "/cartpage">
      <Navbar />
       <CartPage/>
       </Route>
       <Route exact path = "/:id/seperateproduct">
      <Navbar />
      <div style={{background:"white"}}>
       <SeperateProduct/>
      </div>
       </Route>
       <Route exact path = "/buynow">
      <Navbar />
       <BuyNow/>
       </Route>
     </Switch>
   </Router>
    </AppState>
  );
}

export default App;
