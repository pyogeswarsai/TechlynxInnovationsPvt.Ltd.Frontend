import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceHero = () => {
  return (
    <div className="container-fluid p-0">

      {/* Hero Section */}
      <section
        className="position-relative"
        style={{
          backgroundImage: `url("https://t3.ftcdn.net/jpg/05/21/66/12/360_F_521661218_MNYc5lCrIQUKKwBfIGzxJYHYxZzwNof9.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "480px",
        }}
      >


        {/* Centered Title */}
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1 className="fw-bold display-4">Techlynx Innovations Pvt. Ltd.</h1>
        </div>
      </section>
    </div>
  );
};

export default ServiceHero;
