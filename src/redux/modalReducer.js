export const RENAME = 'RENAME';

let initialState = {
        itemsList : [
            {id: 1, name: "Mark Benson", price: "(353 Rochester St, Rialto FL 43250)", number: "555-534-2342"},
            {id: 2, name: "Bob Smith", price: "(215 Market St, Dansvile CA 83415)", number: "444-253-4252"},
            {id: 3, name: "John Draper", price: "(890 Main St, Fontana IL 23342)", number: "333-889-7895"},
            {id: 4, name: "Djulia Vins", price: "(534 Djein St, Montana EW 11278)", number: "777-458-9987"},
            {id: 5, name: "Kriatina Pars", price: "(777 Vein St, Sontana EW 78944)", number: "555-325-5864"}
        ]
}

 let modalReducer = (state = initialState, action) => {
     switch (action.type) {
         case RENAME :
             {
                      let handleSave = data => {
         for (let key in state.itemsList) {
             if (state.itemsList[key].id === data.id) {
                 state.itemsList[key] = data;
             }
         }
     }
        let rename = (id) => {
            const data={
                id: id,
                name,
                price,
                number,
            }
            handleSave(data);
        }
             };
         default:
             return state;
     }
 }

export default modalReducer;