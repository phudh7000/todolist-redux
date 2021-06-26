var initialState = false;



var myReducers = (state = initialState, action)=>{

    if(action.type === 'toggleStatus')
    return !state;

    return state;

}

export default myReducers;