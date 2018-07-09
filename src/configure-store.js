import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const enhancer = compose(
  applyMiddleware(reduxThunk)
  /* window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__() */
);

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState,
    enhancer
  );
};

export default configureStore;
