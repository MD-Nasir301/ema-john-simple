import React, { createContext } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Login from './component/login/Login';
import Inventory from './component/Inventory/Inventory';
import { AuthContextProvider,PrivateRoute  } from './component/login/useAuth';
import Shipment from './component/Cart/Shipment/Shipment';



function App() {
  return (
    <div>    
      <AuthContextProvider>
       <Header></Header>
      <Router>
        <Switch>

          <Route path='/shop'>
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>

          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute  path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute >

          <Route exact path='/'>
            <Shop></Shop>:
          </Route>

          <Route  path='/product/:productKey'>
            <ProductDetails></ProductDetails>
          </Route>

      <Route path='*/'>
            <NotFound></NotFound>
          </Route>    


          
        </Switch>
      </Router>


      </AuthContextProvider> 
    </div>
  );
}

export default App;
