import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Forum from './components/Forum';
import Chat from './components/Chat';
import Art1 from './components/Art1';
import Art2 from './components/Art2';
import Art3 from './components/Art3';
import Art4 from './components/Art4';
import Art5 from './components/Art5';
import Art6 from './components/Art6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Art1" element={<Art1 />} />
        <Route path="/Art2" element={<Art2 />} />
        <Route path="/Art3" element={<Art3 />} />
        <Route path="/Art4" element={<Art4 />} />
        <Route path="/Art5" element={<Art5 />} />
        <Route path="/Art6" element={<Art6 />} />
    </Routes>
  </BrowserRouter>
);