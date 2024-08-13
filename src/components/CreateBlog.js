import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const saveBlog = () => {
        if (title && content) {
            const newBlog = { title, content, id: Date.now() };
            const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
            existingBlogs.push(newBlog);
            localStorage.setItem('blogs', JSON.stringify(existingBlogs));
            navigate('/blogs');
        } else {
            alert('Please enter both a title and content.');
        }
    };

    return (
        <div className="create-blog">
            <h2>Create Blog</h2>
            <input 
                type="text" 
                placeholder="Blog Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            <button onClick={saveBlog}>Save Blog</button>
        </div>
    );
};

export default CreateBlog;
