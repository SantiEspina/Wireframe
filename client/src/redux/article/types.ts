export interface Article {
    _id: string;
    author?: string;
    created_at: string;
    title?: string;
    url: string;
};

export interface ArticleState {
    articles: Article[];
};

export const GET_ARTICLES: string = 'GET_ARTICLES';
export const POST_REMOVED: string = 'POST_REMOVED';

interface GetArticles {
    type: typeof GET_ARTICLES;
    payload: Article[];
};

interface PostRemoved {
    type: typeof POST_REMOVED;
    payload: Article[];
};

export type ArticleActionTypes = GetArticles | PostRemoved;