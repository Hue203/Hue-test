import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import leadReducer from "redux/reducers/lead.reducer";

const initialState = {};
const store = createStore(
  leadReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
