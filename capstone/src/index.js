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
import PostPage from './components/PostPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/posts/:id" element={<PostPage />} />
        
    </Routes>
  </BrowserRouter>
);