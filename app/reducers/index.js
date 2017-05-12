import { combineReducers } from "redux";
import setUser from "./user";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        setUser: setUser
    });
}
