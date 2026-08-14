export const myAction=(payload)=>{
    return{
        type:"Add",
        payload
    }
}

export const incrementquantity=(index)=>{
    return{
        type:"incqty",
        index
    }
}

export const decrementquantity=(index)=>{
    return{
        type:"decqty",
        index
    }
}

export const removecartitem = (index) => {
    return {
        type: "REMOVE_ITEM",
        index
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}