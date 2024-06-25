import { createSlice, current } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => { 
            state.items.push(action.payload); 

            //console.log(current(state)) // current is required to view properly redux state
        },
        removeItem: (state, action) => { state.items.pop(); },
        clearCart: (state, action) => { state.items = []; } // can do return {items: []} also
    }
})

//createSlice returns an object of name, actions and reducer

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;