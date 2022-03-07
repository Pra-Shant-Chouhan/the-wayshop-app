import { combineReducers } from "redux";
import shopCategoriesReducer from "./components/ShopCategories/ShopCatergories.reducer";
export const rootReducer = combineReducers({
  
  shopCategories: shopCategoriesReducer,
});