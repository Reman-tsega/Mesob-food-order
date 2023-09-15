import React, { createContext, useReducer } from 'react'
// import CartItemContext from './CartContext'

export const CartItemContext = createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem: (id)=>{},
    clearCart:()=>{}
})


// -----------------------------_---------------------------

const defaultState ={ items:[],
                    totalAmount:0,
                    }

const cartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD':
            // is check whehe he added iem is exised, i so only updae he amoun else conca as a new
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
            
            const existingItemIndex = state.items.findIndex(item=>item.id === action.item.id)
            const existingItem = state.items[existingItemIndex]
            let updatedItems;

            if(existingItem){
                const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount};
                updatedItems = [...state.items]
                updatedItems[existingItemIndex]=updatedItem;
            }
            else{
                updatedItems = state.items.concat(action.item)
            }
            return {items:updatedItems, totalAmount:updatedTotalAmount}
            
            break;
        case 'Remove':
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.deletedId
              );
            const existingIte = state.items[existingCartItemIndex];
            const updatedTotalAmoun = state.totalAmount - existingIte.price;
            let updatedIems;
            if (existingIte.amount === 1) {
            updatedIems = state.items.filter(item => item.id !== action.deletedId);
            } else {
            const updatedItem = { ...existingIte, amount: existingIte.amount - 1 };
            updatedIems = [...state.items];
            updatedIems[existingCartItemIndex] = updatedItem;
            }
        
            return {
            items: updatedIems,
            totalAmount: updatedTotalAmoun
            };
                
            break;
        case 'Clear':
            return defaultState;
            break;
        default:
            return defaultState;
    }
}

export function ContextProvider(props) {
    const [CartState, dispatchCartItem] = useReducer(cartReducer,defaultState)
    console.log(CartState,"snap shot")
    
    const AddItemHandler =(item)=>{
        dispatchCartItem({type:"ADD",item:item})
        
    }
    
    const RemoveItemHandler =(id)=>{
        dispatchCartItem({type:"Remove",deletedId:id})

    }
    const clearCartHandler =()=>{
        dispatchCartItem({type:"Clear"})
    }

    const context = {
        items:CartState.items,
        // items:CartItemContext.items,
        totalAmount:CartState.totalAmount,
        addItem:AddItemHandler,
        removeItem: RemoveItemHandler,
        clearCart: clearCartHandler
    }

  return (
    <CartItemContext.Provider value={context}>
        {props.children}

    </CartItemContext.Provider>
  )
}

export  default ContextProvider