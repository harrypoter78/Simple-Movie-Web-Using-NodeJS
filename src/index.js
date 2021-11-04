import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";

const globalState = {
  movie_id: "",
  username: "",
  session_id: "",
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movie_id", "username", "session_id"],
};

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case "ADD_SESSION_ID":
      return {
        ...state,
        session_id: action.payload,
      };
    case "DELETE_SESSION_ID":
      return {
        ...state,
        session_id: "",
      };
    case "UPDATE_MOVIE_ID":
      return {
        ...state,
        movie_id: action.payload,
      };
    case "UPDATE_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "DELETE_USERNAME":
      return {
        ...state,
        username: "",
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
