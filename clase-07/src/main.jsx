import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cocktail from './pages/Cocktail';
import Contacto from './pages/Contacto';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/cocktail/:id" element={<Cocktail />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
