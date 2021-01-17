import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReducer';
import {newsReducer} from './reducers/newsReducer';

const reducers = combineReducers({
  authAPI: authReducer,
  newsAPI: newsReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
