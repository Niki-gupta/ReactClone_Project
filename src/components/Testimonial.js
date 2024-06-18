import React from 'react';
import './style.css';
import person1 from '../assets/profile.png'; // Make sure to have images for the testimonials

const Testimonial = () => {
    return (
        <div className="testimonials">
            <div className="testimonial">
                <img src={person1} alt="Person 1" className="testimonial-image" />
                <div className="testimonial-text">
                    <h3>Jane Doe</h3>
                    <p>Jane had an amazing learning experience and found the courses extremely valuable.</p>
                </div>
            </div>
            <div className="testimonial">
                <img src={person1} alt="Person 2" className="testimonial-image" />
                <div className="testimonial-text">
                    <h3>John Smith</h3>
                    <p>John improved his skills significantly and appreciated the quality of the instruction.</p>
                </div>
            </div>
            <div className="testimonial">
                <img src={person1} alt="Person 3" className="testimonial-image" />
                <div className="testimonial-text">
                    <h3>Emily Johnson</h3>
                    <p>Emily enjoyed the interactive sessions and the practical approach to learning.</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
