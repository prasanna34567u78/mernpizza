export const getAllPizzasReducers=(state={pizzas:[]},action)=>{
    switch(action.type){
        case 'GET_PIZZAS_REQUEST' : return {
            ...state,
            loading : true,
        }
        case 'GET_PIZZAS_SUCCESS' : return {
            loading : false,
            pizzas:action.payload
        } 
        case 'GET_PIZZAS_FAILED' : return {
            loading:false,
            error: action.payload
        }
        default : return state
    }
}