import React from 'react';
import '../App.css';
import Introduction from "./Introduction.jsx";

const App = () => {
  return (
    <>
      <Introduction/>
      <div className="main-content">

        <div className="card">
          <img src="https://www.a2hosting.com/blog/content/uploads/2021/01/Website-Design-770x529.jpg" alt="Web Design" className="card-image" />
          <div className="card-content">
            <h2>Web Design</h2>
            <p>We create stunning and responsive websites.</p>
            <p>Our designs are user-friendly and optimized.</p>
            <p>Let us build your online presence.</p>
            <button className="card-btn"><a href='navbar.jsx'>Know More</a></button>
          </div>
        </div>

        

        <div className="card">
          <img src="https://www.a2hosting.com/blog/content/uploads/2021/01/Website-Design-770x529.jpg" alt="AI Applications" className="card-image" />
          <div className="card-content">
            <h2>AI Applications</h2>
            <p>Leverage AI to enhance your business operations.</p>
            <p>We build intelligent solutions tailored to you.</p>
            <p>Transform your data into actionable insights.</p>
            <button className="card-btn"><a href='navbar.jsx'>Know More</a></button>
          </div>
        </div>

        
        <div className="card">
          <img  src="https://rdsdigital.in/wp-content/uploads/2022/01/RDS-1-02-212.webp" alt="Digital Marketing" className="card-image" id="large-img" />
          <div className="card-content">
            <h2>Digital Marketing</h2>
            <p>Boost your brand's online presence.</p>
            <p>Our strategies drive traffic and engagement.</p>
            <p>Reach your target audience effectively.</p>
            <button className="card-btn"><a href='Navbar.jsx'>Know More</a></button>
          </div>
        </div>


        <div className="card">
          <img src="https://www.a2hosting.com/blog/content/uploads/2021/01/Website-Design-770x529.jpg" alt="Web Design" className="card-image" />
          <div className="card-content">
            <h2>Web Design</h2>
            <p>We create stunning and responsive websites.</p>
            <p>Our designs are user-friendly and optimized.</p>
            <p>Let us build your online presence.</p>
            <button className="card-btn"><a href='Navbar.jsx'>Know More</a></button>
          </div>
        </div>

       
        <div className="card">
          <img src="https://www.a2hosting.com/blog/content/uploads/2021/01/Website-Design-770x529.jpg" alt="AI Applications" className="card-image" />
          <div className="card-content">
            <h2>AI Applications</h2>
            <p>Leverage AI to enhance your business operations.</p>
            <p>We build intelligent solutions tailored to you.</p>
            <p>Transform your data into actionable insights.</p>
            <button className="card-btn"><a href='Navbar.jsx'>Know More</a></button>
          </div>
        </div>

   
        <div className="card">
          <img src="https://rdsdigital.in/wp-content/uploads/2022/01/RDS-1-02-212.webp" alt="Digital Marketing" className="card-image"  id="large-img" />
          <div className="card-content">
            <h2>Digital Marketing</h2>
            <p>Boost your brand's online presence.</p>
            <p>Our strategies drive traffic and engagement.</p>
            <p>Reach your target audience effectively.</p>
            <button className="card-btn"><a  href='Navbar.jsx'>Know More</a></button>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
