import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../redux';
import { getArticles } from '../../redux/article/actions';
import { Article } from '../../redux/article/types';
import ArticleCard from './card';

import './articleScreen.scss';

const ArticleScreen: React.FC = (): JSX.Element => {
    const HOUR = 3600 * 1000 + 5;
    const { articles } = useSelector((state: RootState) => state.article);
    const dispatch = useAppDispatch();
    const [ state, setState ] = useState<Article[]>([]);

    useEffect(() => {
        dispatch(getArticles());
        setState(articles);
        const interval = setInterval(() => {
            dispatch(getArticles());
            setState(articles);

        }, HOUR);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div className='container'>
            {
                articles.length > 0 && articles.sort((a: any, b: any) => b._id - a._id).map(article => (
                    <ArticleCard article={article} key={article._id} />
                ))
            }
        </div>
    )
};

export default ArticleScreen;