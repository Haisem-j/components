import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';
var authors = ['Sam', 'Haisem', 'Adam'];
var posts = ['Nice post fammaz', 'lorem random ishhh', 'Another siii amgo'];
const App = () =>{
    return (
        <div className ="ui container comments">
            <CommentDetail 
                author={authors[0]} 
                timeAgo="Today at 4:45PM" 
                blogPost={posts[0]} 
                randomImg={faker.image.avatar()} 
            />
            <CommentDetail 
                author={authors[1]}
                timeAgo="Today at 5:00PM" 
                blogPost={posts[1]} 
                randomImg={faker.image.avatar()}
            />
            <CommentDetail 
                author={authors[2]} 
                timeAgo="Today at 5:45PM" 
                blogPost={posts[0]} 
                randomImg={faker.image.avatar()}
            />
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)