import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import ViewBlogs from './components/ViewBlogs';
import BlogDetails from './components/BlogDetails';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <Link to="/">Create Blog</Link>
                    <Link to="/blogs">View Blogs</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<CreateBlog />} />
                    <Route path="/blogs" element={<ViewBlogs />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
