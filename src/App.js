import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Customers/>
            {/*<Products/>*/}
        </div>
);
}

export default App;