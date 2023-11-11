import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
