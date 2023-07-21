import * as actionTypes  from '../actions/type'

export const todosReducers = (state = [], action )=>{

    
    switch(action.type){

        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state]

        case actionTypes.GETALL_TODO:
            return action.payload

        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.playload._id ? {...todo, done: !todo.done} : todo
            ))

        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.playload._id ? {...todo, data: action.playload.data} : todo
            ))

            case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.playload._id );

        default:
            return state;
    }
}