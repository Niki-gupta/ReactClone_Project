import React from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Testimonial from './components/Testimonial';
import Footr from './components/Footr';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Info/>
            <h2><center><b>Testimonials</b></center></h2>
            <Testimonial/>
            <Footr/>
            
        </div>
    );
}

export default App;


