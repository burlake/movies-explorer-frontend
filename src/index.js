import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './components/App';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Search from './components/Search/Search';
// import Card from './components/Cards/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main />
      {/* <Search /> */}
      {/* <Card /> */}
      <Footer />
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();