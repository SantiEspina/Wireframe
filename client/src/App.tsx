import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { RootState, useAppDispatch } from './redux';
import { getArticles } from './redux/article/actions';

import Header from './components/header';
import ArticleScreen from './components/articles';


const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={ArticleScreen} />
    </div>
  );
}

export default App;
