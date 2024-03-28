import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Author';
import CreatePost from './pages/CreatePost';
import CategoryPosts from './pages/CategoryPost';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import EditPost from './pages/EditPost';
import Logout from './pages/Logout';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile/:id" element={<UserProfile />} />
          <Route path="authors" element={<Authors />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="posts/categories/:category" element={<CategoryPosts />} />
          <Route path="posts/users/:id" element={<AuthorPosts />} />
          <Route path="myposts/:id" element={<Dashboard />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);