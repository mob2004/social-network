import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
    {id: 1, message: "How are you?", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 10},
    {id: 3, message: "BlaBla", likesCount: 15},
    {id: 4, message: "DaDa", likesCount: 19}
]

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
const MyPosts = (props) => {
    debugger;
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>)
}

export default MyPosts;