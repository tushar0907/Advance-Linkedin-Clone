import {createStore, applyMiddleware} from "redux";

import rootReducer from "../reducers/userReducer";

const store = createStore(rootReducer, {});

export default store;
