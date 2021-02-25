import { ArticleState, GET_ARTICLES, ArticleActionTypes, POST_REMOVED } from './types';

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
        case POST_REMOVED:
            return {
                ...state,
                articles: action.payload
            }
        default: return state;
    };
};