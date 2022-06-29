const ADD_TO_ORDER = 'stuff/ADD_TO_ORDER';
const DELETE_FROM_ORDER = 'stuff/DELETE_FROM_ORDER';
const GET_ORDER_ID = 'stuff/GET_ORDER_ID';

const initialState = {
    clientOrder: [],
    orderId: {}
};

export default function stuffReducer (state = initialState, action) {
    switch ( action.type ) {
        case ADD_TO_ORDER:
            return { ...state, clientOrder: state.clientOrder.concat(action.payload) };
        case DELETE_FROM_ORDER:
            return { ...state, clientOrder: state.clientOrder.filter(items => items !== action.payload) };
        case GET_ORDER_ID: 
            return {...state, orderId: action.payload};
        default: return state;
    }
};

export const inOrder = (item) => ({
    type: ADD_TO_ORDER,
    payload: item
});

export const getOrderId = id => ({
    type: GET_ORDER_ID,
    payload: id
})

export const deleteFromOrder = item => ({
    type: DELETE_FROM_ORDER,
    payload: item
});