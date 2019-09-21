const initialState={
    fetched:false,
    movies:[],
    error:null,
}
const moviesReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_MOVIES':
        return {
            ...state,
            fetched:true,
            movies:action.payload}
        break;
           case 'FETCH_MOVIES_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default moviesReducer;