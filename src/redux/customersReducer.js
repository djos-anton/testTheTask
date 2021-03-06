//export const ReNaME = 'RENAME';
import React, {useEffect} from "react";
import {CUSTOMERS_ADD, CUSTOMERS_DELETE, CUSTOMERS_SAVE} from "./action";


let initialState = {
    itemsList: [
        {id: 1, name: "Mark Benson", price: "(353 Rochester St, Rialto FL 43250)", number: "555-534-2342"},
        {id: 2, name: "Bob Smith", price: "(215 Market St, Dansvile CA 83415)", number: "444-253-4252"},
        {id: 3, name: "John Draper", price: "(890 Main St, Fontana IL 23342)", number: "333-889-7895"},
        {id: 4, name: "Djulia Vins", price: "(534 Djein St, Montana EW 11278)", number: "777-458-9987"},
        {id: 5, name: "Kriatina Pars", price: "(777 Vein St, Sontana EW 78944)", number: "555-325-5864"}
    ]
}
let customersReducer = (state = initialState, action) => {
    //debugger;
    const {data} = action;
//console.log(action.type);
    switch (action.type) {
        case CUSTOMERS_ADD : {
            let itemsListCopy = [...state.itemsList];
            //for (let key in itemsListCopy) {
                 //if (action.data.id === null && action.data.name != null) {
            let newId = 0;
            for (let key in itemsListCopy) {
                if (itemsListCopy[key].id > newId) {
                    newId = itemsListCopy[key].id;
                    action.data.id = newId + 1;
                }
            }
            itemsListCopy[itemsListCopy.length] = action.data;
                    //let maxObj=itemsListCopy.reduce((prev, cur) => cur.id>prev.id?cur:prev,{id:-Infinity});
                    //action.data.id = maxObj.id+1;
                    // if (action.data.name === " ") {
                    //     action.data.name = 'Yo';
                    // }


            //console.log(action.data)
                //}
            //}
            return {
                ...state,
                itemsList: itemsListCopy
            }
        }
        case CUSTOMERS_SAVE : {
            let itemsListCopy = [...state.itemsList];
            for (let key in itemsListCopy) {
                if (itemsListCopy[key].id === action.data.id) {
                    itemsListCopy[key] = action.data;
                }
            }
            return {
                ...state,
                itemsList: itemsListCopy
            }
        }
        case CUSTOMERS_DELETE : {
            let itemsListCopy = [...state.itemsList];
            for (let key in itemsListCopy) {
                if (itemsListCopy[key].id === action.data.id) {
                   itemsListCopy.splice(key, 1);
                }
            }
            return {
                ...state,
                itemsList:itemsListCopy
            }
        }
        default:
            return state;
    }

}
export default customersReducer;