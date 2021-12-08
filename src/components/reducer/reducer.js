const initialState = {
    history : []
}
//----------------------------------------
export default function historyReducer(state = initialState,action){
    console.log('action...',action);
    console.log('state.....>',state);
    const {type,payload1,payload2} = action;
    switch(type){
        case 'Add_History':
            const history = [...state.history , payload1,payload2];
            return {history:history};
        case 'Empty_History':
            return initialState;
        default:
            return state;
    }
}
//----------------------------------------
export const addHistory = (history,result) =>{
    console.log('inside add history: history is',history);
    return{
        type: 'Add_History',
        payload1: history,
        payload2:result
    }
}
//----------------------------------------
export const emptyHistory = ()=>{
    console.log('inside empty history');
    return{
        type: 'Empty_History',
    }
}
//----------------------------------------
//----------------------------------------
