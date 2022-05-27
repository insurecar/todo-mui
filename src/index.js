import React from "react";
import ReactDOM from "react-dom/client";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { tasksReducer } from "./redux/reducers/tasks.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import "./i18n";
import "./styles/index.scss";
import App from "./components/App/App";

const rootReducer = combineReducers({ tasksReducer });

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
