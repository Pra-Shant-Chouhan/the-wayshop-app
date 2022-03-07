import { combineReducers } from "redux";
import shopCategoriesReducer from "./components/ShopCategories/ShopCatergories.reducer";
import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/product.reducer";
export const rootReducer = combineReducers({
  
  shopCategories: shopCategoriesReducer,
  cart: cartReducer,
  products: productsReducer
});