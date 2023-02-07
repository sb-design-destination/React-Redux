

const initialstate ={carts:[]}
 export const cartreducer=(state=initialstate,action)=>{
    
    switch (action.type ) {
        case "ADD_CART":
            return{...state,carts:[...state.carts,action.payload]}
    
        default:
          return state
    }

}

