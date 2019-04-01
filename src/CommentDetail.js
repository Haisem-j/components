import React from 'react';
import faker from 'faker';

// var time = new Date.getTime();
const CommentDetail =props=>{
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.randomImg}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.blogPost}</div>
        </div>
        </div>
    );
}

export default CommentDetail;