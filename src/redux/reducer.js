const initialCart = {
    cart: []
}

const cartReducer = ( state = initialCart, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            return {
                cart: [...state.cart, action.data]
            }
            case "REMOVE_PRODUCT":
                if (action.data) {
                    state.cart.splice(state.cart.indexOf(action.data), 1)
                }
                return {
                    cart: [...state.cart]
                }
                case " ":
                    state.cart.map((product) => {
                        return product.id === action.data.id ? product.count + (product.count < 10 ? 1 : 0) : product.count
                    })
                    return {
                        cart: [...state.cart]
                    }
                    default:
                        return state
    }
}

export { cartReducer }