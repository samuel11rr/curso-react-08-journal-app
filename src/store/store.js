import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// aquí agregamos todos los reducers para mandarlos al store
const reducers = combineReducers({
  auth: authReducer
});


// Solo puede recibir un reducer
export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( thunk ) // middleware para acciones asincronas
  )
);