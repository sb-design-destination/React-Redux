
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import rootreducer from "./Redux/reducer/index"

const middleware =[thunk]
const store = createStore(
    rootreducer,
  
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;