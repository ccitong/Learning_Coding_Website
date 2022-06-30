import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//react router dom imports
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ScheduleClassPage from './pages/ScheduleClassPage';
import BookClassPage from './pages/BookClassPage';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}>
        <Route path = "schedule" element = {<ScheduleClassPage />}></Route>
        <Route path = "book/:classId" element = {<BookClassPage />}></Route>
        <Route index element={<HomePage />}></Route>
      </Route>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
