import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/index.jsx"

const middelware = [thunk]
const initialState = {}
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store;