import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CustomStore from "./CustomStore.jsx"
import MainRouter from "./MainRouter.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={CustomStore}>
        <BrowserRouter>
           <MainRouter/>
        </BrowserRouter>
    </Provider>
);

