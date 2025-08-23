import React from "react";
import "./News.css";

const newsItems = [
  {
    title: "Technology & Innovation",
    description: "We deliver future-ready, game-changing, value-driven technology solutions.",
    image: "/Technology.jpg",
  },
  {
    title: "Purpose-led Transformation",
    description: "Reimagining businesses to drive purpose-led transformation and growth.",
    image: "/Transform.jpg",
  },
  {
    title: "Sustainability",
    description: "Building a sustainable and equitable future through technology.",
    image: "/Sustaina.jpg",
  },
];

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="news-section-container rounded-4 w-75 h-75 bg-dark bg-opacity-50 text-center justify-content-center  p-5">
        <h1 className="text-center text-white mb-4 fs-1 p-3">Latest News</h1>
        <div className="row justify-content-center g-4">
          {newsItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <div className="card news-card shadow-sm fs-5 h-100">
                <img
                  src={item.image}
                  className="card-img-top news-img"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-dark">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
