//export const ReNaME = 'RENAME';
import React, {useEffect} from "react";


let initialState = {
    itemsList: [
        {id: 1, name: "Mark Benson", price: "(353 Rochester St, Rialto FL 43250)", number: "555-534-2342"},
        {id: 2, name: "Bob Smith", price: "(215 Market St, Dansvile CA 83415)", number: "444-253-4252"},
        {id: 3, name: "John Draper", price: "(890 Main St, Fontana IL 23342)", number: "333-889-7895"},
        {id: 4, name: "Djulia Vins", price: "(534 Djein St, Montana EW 11278)", number: "777-458-9987"},
        {id: 5, name: "Kriatina Pars", price: "(777 Vein St, Sontana EW 78944)", number: "555-325-5864"}
    ]
}
let modalReducer = (state = initialState, action) => {
    const {data} = action;
    switch (action.type) {
        case 'SAVE' : {
            let itemsListCopy = [...state.itemsList];
            for (let key in itemsListCopy) {
                if (itemsListCopy[key].id === action.data.id) {
                    itemsListCopy[key] = action.data;
                } else if (action.data.id == ' ') {
                    action.data.id = itemsListCopy.length;
                    itemsListCopy[key] = action.data;
                }
            }
            return {
                ...state,
                itemsList: itemsListCopy
            }
        }
        case 'DELETE' : {
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
export default modalReducer;