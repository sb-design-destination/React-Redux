import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Mainrouter from "./Mainrouter.jsx"
import { Provider } from 'react-redux';
import CreateStore from "./CreateStore.jsx"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CreateStore}>
<BrowserRouter>
    <Mainrouter />
  </BrowserRouter>
  </Provider>
  

);

