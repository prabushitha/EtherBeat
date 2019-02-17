import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import Reducer from '../reducers';


/* ---DEV ENVIRONMENT  */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(Reducer, enhancer);
/* ---FINISH DEV ENVIRONMENT --- */

/* ---PROD ENVIRONMENT  */
/*const middleware = applyMiddleware(thunk);
const store = createStore(Reducer, middleware);*/
/* ---FINISH PROD ENVIRONMENT  */


export default store;