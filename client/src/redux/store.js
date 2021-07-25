import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import initialState from './initState';
import rootReducer from './reducers/root.reducer';

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
