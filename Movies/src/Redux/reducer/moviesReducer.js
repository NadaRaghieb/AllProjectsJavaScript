import { AllMOVIES } from '../types/moviesType'

const initialValue= {movies:[], pageCount:0}

export const moviesReducer = (state = initialValue, action)=>{
    switch(action.type)
    {
        case AllMOVIES:
            return {movies: action.data}
            default:
                return state;
    }
}