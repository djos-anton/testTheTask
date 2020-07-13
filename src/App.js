import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Customers from './components/Customers/Customers';
import CustomersParameters from './components/CustomersParameters/CustomersParameters';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

let defaultfoods = [
    {id: 1, food: "juice", cost: "1,3"},
    {id: 2, food: "milk", cost: "4,1"},
    {id: 3, food: "bread", cost: "2,7"},
    {id: 4, food: "butter", cost: "3,5"},
    {id: 5, food: "flakes", cost: "2,0"}
]

const App = (props) => {
//debugger;
    const [foodCost, setFoodCost] = useState([...defaultfoods]);

    /*let state = {
        itemsList: [
            {id: 1, name: "Mark Benson", price: "(353 Rochester St, Rialto FL 43250)", number: "555-534-2342"},
            {id: 2, name: "Bob Smith", price: "(215 Market St, Dansvile CA 83415)", number: "444-253-4252"},
            {id: 3, name: "John Draper", price: "(890 Main St, Fontana IL 23342)", number: "333-889-7895"},
            {id: 4, name: "Djulia Vins", price: "(534 Djein St, Montana EW 11278)", number: "777-458-9987"},
            {id: 5, name: "Kriatina Pars", price: "(777 Vein St, Sontana EW 78944)", number: "555-325-5864"}
        ]
    }
    //console.log(state);
    let handleSave = data => {
        for (let key in state.itemsList) {
            if (state.itemsList[key].id === data.id) {
                state.itemsList[key] = data;
            }
        }
    }*/

    let handleSave = (data) => {
        let foodsListCopy = [...foodCost];
        for (let key in foodsListCopy) {
            if (foodsListCopy[key].id === data.id) {
                foodsListCopy[key] = data;
            }
        }
        setFoodCost(foodsListCopy);
    }
    return (
        <div>
            <Header/>
            <Route path='/customers'
                   render={() => <Customers
                       //items={state.itemsList}
                       //handleSave={handleSave}
                       //rename={props.rename}
                   />}/>
            <Route path='/products'
                   render={() => <Products
                       foodsList={foodCost}
                       handleSave={handleSave}/>}/>
        </div>
    );
}

export default App;