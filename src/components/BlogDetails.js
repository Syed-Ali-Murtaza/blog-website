import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        const foundBlog = blogs.find((b) => b.id === parseInt(id));
        setBlog(foundBlog);
    }, [id]);

    if (!blog) return <p>Blog not found.</p>;

    return (
        <div className="blog-details">
            <h2>{blog.title}</h2>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
};

export default BlogDetails;
