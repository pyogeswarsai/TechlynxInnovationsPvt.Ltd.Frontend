import React from 'react';
import './WallpaperCarousel.css';

const WallpaperCarousel = () => {
  return (
    <div id="wallpaperCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="b1.jpeg" className="d-block carousel-img" alt="Slide 1" />
          <div className="carousel-caption animated-text">
             <h2><span className="highlight-word">Future</span> depends on what you do <span className="highlight-word">today</span></h2>
            <p>Connect your <span className="underline-hover">career</span> with us</p>
             <a href="#whyjoinus"><button className="btn learn-btn">Learn More →</button></a>
          </div>
        </div>

        <div className="carousel-item">
          <img src="pexels-daniela-elena-tentis-118658-370799.jpg" className="d-block w-100 carousel-img" alt="Slide 2" />
          <div className="carousel-caption animated-text">
            <h2><span className="highlight-word">Opportunities</span> don't happen,<br />
                <span className="highlight-word">you</span> create them</h2>
                <p>Take the first step towards your dream career</p>
                <a href="#whyjoinus"><button className="btn learn-btn">Join Us →</button></a>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#wallpaperCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#wallpaperCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default WallpaperCarousel;
