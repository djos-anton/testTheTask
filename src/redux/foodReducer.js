import React from "react";

let initialState = {
    foodsList: [
        {id: 1, food: "juice", cost: "1,3"},
        {id: 2, food: "milk", cost: "4,1"},
        {id: 3, food: "bread", cost: "2,7"},
        {id: 4, food: "butter", cost: "3,5"},
        {id: 5, food: "flakes", cost: "2,0"}
    ]
}

let foodReducer = (state = initialState, action) => {
    const {data} = action;
    switch (action.type) {
        case 'FOOD_EDIT' : {
            let foodsListCopy = [...state.foodsList];
            for (let key in foodsListCopy) {
                if (foodsListCopy[key].id === data.id) {
                    foodsListCopy[key] = data;
                }
            }
            return {
                ...state,
                foodsList: foodsListCopy
            }
        }
    }
}

export default foodReducer;