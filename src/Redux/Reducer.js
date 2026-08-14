const arr = [];

export const myReducer = (state = arr, action) => {

    if (action.type === "Add") {

        const existItem = state.find(
            (item) => item.id === action.payload.id
        );

        if (existItem) {
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }

        return [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ];
    }

    else if (action.type === "incqty") {
        return state.map((item, index) =>
            index === action.index
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    else if (action.type === "decqty") {
        return state.map((item, index) =>
            index === action.index && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
    }

    else if (action.type === "REMOVE_ITEM") {
        return state.filter((item, index) => index !== action.index);
    }

    else if (action.type === "CLEAR_CART") {
        return [];
    }

    return state;
};