import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Customers from './components/Customers/Customers';
import CustomersTest from './components/Customers/CustomersTest';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";

const App = (props) => {
//debugger;
    return (
        <div>
            <Header/>
            <Route path='/customers'
                   render={() => <Customers/>}/>
            <Route path='/products'
                   render={() => <Products/>}/>
            <Route path='/customersTest'
                   render={() => <CustomersTest/>}/>
        </div>
    );
}

export default App;