import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header/>
            <Route path='/customers' render={() => <Customers/>} />
            <Route path='/products' render={() => <Products/>} />
        </div>
);
}

export default App;