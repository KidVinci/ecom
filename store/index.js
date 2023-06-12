import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import cart from "./cartSlice";
const reducers= combineReducers({cart});

const config= {
    key: "root",
    storage : AsyncStorage,
};

const reducer = persistReducer(config,reducers);

const store=configureStore({
    reducer:reducer,
    devTools:process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export default store;