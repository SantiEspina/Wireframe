export interface Article {
    _id: string;
    author?: string;
    created_at: string;
    title?: string;
    url?: string;
};

export interface ArticleState {
    articles: Article[];
};

export const GET_ARTICLES: string = 'GET_ARTICLES';

interface GetArticles {
    type: typeof GET_ARTICLES;
    payload: Article[];
};

export type ArticleActionTypes = GetArticles;