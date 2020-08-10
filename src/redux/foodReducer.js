import React from "react";
import {PRODUCTS_DELETE, PRODUCTS_SAVE} from "./action";

let initialState = {
    foodDataList: [
        {id: 1, food: "juice", cost: "1,3"},
        {id: 2, food: "milk", cost: "4,1"},
        {id: 3, food: "bread", cost: "2,7"},
        {id: 4, food: "butter", cost: "3,5"},
        {id: 5, food: "flakes", cost: "2,0"}
    ]
}

let foodReducer = (state = initialState, action) => {
    const {data} = action;
    //console.log(action)
    switch (action.type) {
        case PRODUCTS_SAVE : {
            let foodDataListCopy = [...state.foodDataList];
            for (let key in foodDataListCopy) {
                if (foodDataListCopy[key].id === action.data.id) {
                    foodDataListCopy[key] = action.data;
                }
            }
            return {
                ...state,
                foodDataList: foodDataListCopy
            }
        }
        case PRODUCTS_DELETE : {
            let foodDataListCopy = [...state.foodDataList];
            for (let key in foodDataListCopy) {
                if (foodDataListCopy[key].id === action.data.id) {
                    foodDataListCopy.splice(key, 1);
                }
            }
            return {
                ...state,
                foodDataList: foodDataListCopy
            }
        }
        default:
            return state;
    }
}

export default foodReducer;