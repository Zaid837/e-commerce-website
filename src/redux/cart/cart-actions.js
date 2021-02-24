import {CardActionTypes} from "./cart-types";
export const toggleClassHidden = () => ({
    type: CardActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})