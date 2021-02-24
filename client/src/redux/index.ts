import { combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { articleReducer } from './article/reducer';

const composeEnhancer = compose;
const rootReducer = combineReducers({ article: articleReducer })

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
