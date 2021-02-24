import { ArticleState, GET_ARTICLES, ArticleActionTypes } from './types';

const initialState: ArticleState = {
    articles: []
};

export function articleReducer (state = initialState, action: ArticleActionTypes): ArticleState {
    switch(action.type) {
        case GET_ARTICLES: 
            return {
                ...state,
                articles: action.payload
            }
        default: return state;
    };
};