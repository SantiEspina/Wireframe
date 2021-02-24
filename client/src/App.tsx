import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from './redux';
import { getArticles } from './redux/article/actions';


const App: React.FC = (): JSX.Element => {
  const HOUR = 3600 * 1000 + 5;
  const { articles } = useSelector((state: RootState) => state.article);
  const dispatch = useAppDispatch();

  // const refresh = () => {
  //   dispatch(getArticles())
  // };

  // const refreshContinous = () => setInterval(refresh, 50000000);

  useEffect(() => {
    dispatch(getArticles());
    const interval = setInterval(() => {
      dispatch(getArticles())
    }, HOUR);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>hola</div>
  );
}

export default App;
