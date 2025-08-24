import React from "react";
import '../components/Contact.css'
import HR1 from '../assets/HR1.jpg'
import HR2 from '../assets/HR2.jpg'

const ManagementInfo = () => {
  return (
    <section
      id="management-info"
      className="management-info-section slide-in-section"
    >
      <div className="container text-center">
        <h2 className="text-light">Management / HR Information</h2>
        <div className="row justify-content-center mt-4">
          {/* HR 1 */}
          <div className="col-md-4 mt-2">
            <div className="card p-3 shadow">
              <img src={HR1} height={"320px"}  alt="" />
              <h4 className="mt-2">Renuka Kolasanakoti</h4>
              <p className="text-body">
                <strong>Designation:</strong> Senior HR Executive
              </p>
              <p className="text-body">
                <strong>Mobile:</strong> +91 6309390893
              </p>
              <p className="text-body">
                <strong>Email:</strong> hr@techlynxinnovations.com
              </p>
            </div>
          </div>

          {/* HR 2 */}
          <div className="col-md-4 mt-2">
            <div className="card p-3 shadow">
                <img src={HR2} height={"320px"} alt="" />
              <h4 className="mt-2">Vignasai Chunduri</h4>
              <p className="text-body">
                <strong>Designation:</strong> Junior HR Manager
              </p>
              <p className="text-body">
                <strong>Mobile:</strong> +91 8019254863
              </p>
              <p className="text-body">
                <strong>Email:</strong> Chundurivignasai@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementInfo;
