import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaTimes } from 'react-icons/fa';

import { Article } from '../../../redux/article/types';
import { useAppDispatch } from '../../../redux';
import { postRemoved } from '../../../redux/article/actions';
import { getDate } from '../../../utils';

import './articleCard.scss';

interface Props {
    article: Article
};

const ArticleCard: React.FC<Props> = ({ article }): JSX.Element => {
    let { _id, author, title, url, created_at } = article;
    const dispatch = useAppDispatch();
    const [modal, setModal] = useState<boolean>(false);
    const [id, setId] = useState<string>('');
    const [date, setDate] = useState<string>('');

    useEffect(() => {
        setDate(getDate(created_at));
    }, []);

    const toggleModal = () => {
        setModal(modal => !modal);
        setId(id => id ? '' : _id);
    };

    const deleteArticle = () => {
        dispatch(postRemoved(id));
        toggleModal();
    };


    return (
        <>
            <div className='cardCnt'>
                <div className='cardHeader'>
                    <a href={url}>
                        <h4 className="title">{title} <span className="author">- {author} -</span></h4>
                    </a>
                </div>
                <div className='cardTime'>
                    <h4>{date}</h4>
                </div>
                <FaTrashAlt className='deleteBtn' onClick={toggleModal} />
            </div>
            <div className={`modalCnt-${modal}`}>
                <div className="modal">
                    <FaTimes className='closeBtn' onClick={toggleModal} />
                    <h4 className="titleModal">Are you sure you want to delete this article?</h4>
                    <div className="btnsModal">
                        <button className="no" onClick={toggleModal} >Cancel</button>
                        <button className="yes" onClick={deleteArticle} >Yes</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ArticleCard;