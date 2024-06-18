import React from 'react';
import './style.css';
import instructorImage from '../assets/profile.png'; // Make sure you have an instructor image in your project

const Info = () => {
    return (
        <div className="main-component">
            <div className="main-header">
                <h2>Our Instructors</h2>
                <div className="header-content">
                    <p>Learn from Our Experienced and Dedicated instructors</p>
                    <div className="arrows">
                        <button className="arrow-left">←</button>
                        <button className="arrow-right">→</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="instructor-info">
                <img src={instructorImage} alt="Instructor" className="instructor-image" />
                <div className="info-text">
                    <h3>Instructor Name</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda, placeat nulla, suscipit officia quaerat excepturi magni omnis quo maiores ad doloremque est dignissimos error mollitia maxime laboriosam esse adipisci earum. Et eos est obcaecati porro asperiores tempore aut veritatis.
                   </p>
                </div>
            </div>
        </div>
    );
}

export default Info;
