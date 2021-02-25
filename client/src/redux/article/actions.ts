import axios from 'axios';
import { GET_ARTICLES, ArticleActionTypes, POST_REMOVED, Article } from './types';

type DispatchType = (arg0: ArticleActionTypes) => ArticleActionTypes;

export const getArticles = (): any => async(dispatch: DispatchType) => {
    let { data } = await axios.get(`/articles`);
    data = data.sort((a: any, b: any) => b._id - a._id);
    return dispatch({ type: GET_ARTICLES, payload: data });
};

export const postRemoved = (id: string): any => async (dispatch: DispatchType) => {
    const { data } = await axios.post(`/removeds/${id}`);
    return dispatch({ type: POST_REMOVED, payload: data });
};