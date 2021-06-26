import * as types from '../constants/actionTypes'
var initialState = [{
    name: 'Duong Hoang',
    status: true
},
{
    name: 'Duong Manh',
    status: true
}, {
    name: 'Hoang Anh',
    status: false
}];

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            console.log('action')
            var { name } = action;
            state.push({ name, status: true });
            return [...state]
        case types.TOGGLE_PICK:
            var { index, status } = action;
            state[index].status = status;
            // console.log(state);
            return [...state];

        case types.DELETE_ITEM:
            state.splice(action.index,1);
            return [...state]
        default:
            return state;

    }
}


export default myReducers;
