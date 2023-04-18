import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import Store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* mevcut "Provider"; react ve redux'ı birleştiren paket olan  --react-redux-- içerisinden geliyor... */}
    <Provider store={Store}>
      {/* "Provider" bizden; state lerin nereden geldiğinin adresini istiyor,
      bizde bu "store" oluşturuyoruz ve provider'a  state lerin bu store içerisinden geldiğini gösteriyoruz */}
      <App />
    </Provider>
  </React.StrictMode>
);

