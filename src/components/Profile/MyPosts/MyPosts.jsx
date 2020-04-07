import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    debugger;
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className = {s.posts}>
                New post
            <Post message = 'How are you?' likesCount = '15' />
            <Post message = "It's my first post" likesCount = '10' />
            </div>
        </div>)
}

export default MyPosts;