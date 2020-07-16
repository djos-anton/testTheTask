//export const ReNaME = 'RENAME';
import React, {useEffect} from "react";


let initialState = {
    itemsListTest: [
        {id: 1, name: "Test_1 Testov_1", price: "(ул. Тестовская, 100)", number: "100-100-1000"},
        {id: 2, name: "Test_2 Testov_2", price: "(ул. Тестовская, 200)", number: "200-200-2000"},
        {id: 3, name: "Test_3 Testov_3", price: "(ул. Тестовская, 300)", number: "300-300-3000"},
        {id: 4, name: "Test_4 Testov_4", price: "(ул. Тестовская, 400)", number: "400-400-4000"},
        {id: 5, name: "Test_5 Testov_5", price: "(ул. Тестовская, 500)", number: "500-500-5000"}
    ]
}
let modalReducerTest = (state = initialState, action) => {
    //debugger;
    const {data} = action;
    switch (action.type) {
        case 'ADDTEST' : {
            let itemsListCopy = [...state.itemsListTest];
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
                itemsListTest: itemsListCopy
            }
        }
        case 'SAVETEST' : {
            let itemsListCopy = [...state.itemsListTest];
            for (let key in itemsListCopy) {
                if (itemsListCopy[key].id === action.data.id) {
                    itemsListCopy[key] = action.data;
                }
            }
            return {
                ...state,
                itemsListTest: itemsListCopy
            }
        }
        case 'DELETETEST' : {
            let itemsListCopy = [...state.itemsListTest];
            for (let key in itemsListCopy) {
                if (itemsListCopy[key].id === action.data.id) {
                   itemsListCopy.splice(key, 1);
                }
            }
            return {
                ...state,
                itemsListTest:itemsListCopy
            }
        }
        default:
            return state;
    }

}
export default modalReducerTest;