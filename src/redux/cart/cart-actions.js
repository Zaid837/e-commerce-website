import {CardActionTypes} from "./cart-types";
export const toggleClassHidden = () => ({
    type: CardActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})
export const removeItem = item => ({
    type : CardActionTypes.REMOVE_ITEM,
    payload: item
})
export const clearItemFromCart = item =>({
    type: CardActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})