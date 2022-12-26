import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)