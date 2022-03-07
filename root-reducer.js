import { combineReducers } from "redux";
import shopCategoriesReducer from "./components/ShopCategories/ShopCatergories.reducer";
import cartReducer from "./reducers/cart";
export const rootReducer = combineReducers({
  
  shopCategories: shopCategoriesReducer,
  cart: cartReducer
});