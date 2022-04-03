import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  listProductsReducer,
  productDetailsReducer,
} from './reducers/productReducers';
const middleware = [thunk];
const reducer = combineReducers({
  productList: listProductsReducer,
  productDetails: productDetailsReducer,
});
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
