import React from 'react';

const Post = (props) => (
    <div className="">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
);

export default Post;