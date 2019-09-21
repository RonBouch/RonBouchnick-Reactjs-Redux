export const FETCH_MOVIES='FETCH_MOVIES'

export const getMovies=()=>{
    return(dispatch)=>{
        fetch('https://api.androidhive.info/json/movies.json')
       .then(res=>res.json())
       .then(movies=>{
        dispatch({type:"FETCH_MOVIES",payload:movies})
    })
    .catch((err)=>{
        dispatch({type:"FETCH_MOVIES_REJECTED",payload:err})
    })
    }}

