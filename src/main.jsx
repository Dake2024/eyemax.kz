import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/* Основной маршрут */}
                <Route path="/*" element={<App/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);
