import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";

const App = (props) => {
    let state = {
        itemsList : [
            { id: 1, name: "Mark Benson", price: "353 Rochester St, Rialto FL 43250", number: 555-534-2342, checked: false},
            { id: 2, name: "Bob Smith", price: "215 Market St, Dansvile CA 83415", number: 444-253-4252, checked: false},
            { id: 3, name: "John Draper", price: "890 Main St, Fontana IL 23342", number: 333-889-7895, checked: false},
            { id: 4, name: "Djulia Vins", price: "534 Djein St, Montana EW 11278", number: 777-458-9987, checked: false}
        ]
    }

    return (
        <div>
            <Header/>
            <Route path='/customers' render={() => <Customers/>}/>
            <Route path='/products' render={() => <Products/>} />
        </div>
);
}

export default App;