import * as types from '../constants/actionTypes'


export const status = ()=>{
    return {
        type: types.toggleStatus
    }
}

export function addItem(obj){
    return {
        type: types.ADD_ITEM,
        name: obj,
        status: true
    }
}

export function handlePick(status, index){
    return{
        type: types.TOGGLE_PICK,
        status,
        index
    }
}

export function deleteItem(index){
    return{
        type: types.DELETE_ITEM,
        index
    }
}