import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(savedBlogs);
    }, []);

    return (
        <div className="view-blogs">
            <h2>All Blogs</h2>
            {blogs.length === 0 ? (
                <p>No blogs available. Please create one.</p>
            ) : (
                blogs.map((blog) => (
                    <div key={blog.id} className="blog-item">
                        <h3>{blog.title}</h3>
                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
                        <Link to={`/blogs/${blog.id}`}>Read More</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default ViewBlogs;
