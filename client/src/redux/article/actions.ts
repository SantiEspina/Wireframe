import axios from 'axios';
import { GET_ARTICLES, ArticleActionTypes } from './types';

type DispatchType = (arg0: ArticleActionTypes) => ArticleActionTypes;

export const getArticles = (): any => async(dispatch: DispatchType) => {
    const { data } = await axios.get(`/articles`);
    return dispatch({ type: GET_ARTICLES, payload: data });
};