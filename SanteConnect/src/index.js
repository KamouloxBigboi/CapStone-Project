import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.scss';
import App from './App';
import MainPage from './components/MainPage';
import Forum from './components/Forum';
import PostPage from './components/PostPage';
import SignUp from './components/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/signup" element={<SignUp />} />
        
    </Routes>
  </BrowserRouter>
);