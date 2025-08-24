import { useEffect, useState } from 'react';
import './student.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Link} from 'react-router-dom';

const StudentIntern = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    branch: "",
    yearOfStudy: "",
    cgpa: "",
    motivation: "",
  });

  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/careers/thank-you'); 
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle file input
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (resume) data.append("resume", resume);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const res = await axios.post(
        `${backendUrl}/api/careers/intern/apply`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessage(res.data);
      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        collegeName: "",
        branch: "",
        yearOfStudy: "",
        cgpa: "",
        motivation: "",
      });
      setResume(null);
    } catch (err) {
      setMessage("Error submitting form: " + err.message);
    }
  };

  // return (
  //   <>
  //   <div className="student-intern-section">
  //     <h1 className="intern-heading">Welcome Future Intern!</h1>
  //     <p className="intern-quote">“Your future is created by what you do today, not tomorrow.”</p>
  //   </div>

  //   <div className="intern-info-section">
  //     <div className="intern-text">
  //       <h2>Explore Internship Opportunities</h2>
  //       <ul>
  //         <li>Web Development</li>
  //         <li>UI/UX Design</li>
  //         <li>Data Analytics</li>
  //         <li>AI & Machine Learning</li>
  //         <li>Cloud & DevOps</li>
  //       </ul>
  //       <p>Interns work on real-world projects, receive mentorship, and build a professional portfolio for their careers.</p>
  //     </div>
  //     <div className="intern-image">
  //       <img src="/intern.jpg" alt="Internship" />
  //     </div>
  //   </div>


  //   <div className="intern-form-section container py-5">
  //     <h2 className="text-center fw-bold mb-2 animate-heading">Apply for Internship</h2>
  //     <h4 className="text-center text-primary mb-4 animate-subheading">Fill the form</h4>
  //     <div className="card shadow-lg p-4 rounded animate-form">
  //       <form className="row g-3" onSubmit={handleSubmit}>
  //         <div className="col-md-6">
  //           <label className="form-label">First Name</label>
  //           <input type="text" className="form-control" placeholder="Enter your first name" required />
  //           </div>
  //           <div className="col-md-6">
  //             <label className="form-label">Last Name</label>
  //             <input type="text" className="form-control" placeholder="Enter your last name" required />
  //             </div>
  //             <div className="col-md-6">
  //               <label className="form-label">Email</label>
  //               <input type="email" className="form-control" placeholder="Enter your email" required />
  //             </div>
  //             <div className="col-md-6">
  //               <label className="form-label">Phone Number</label>
  //               <input type="tel" className="form-control" placeholder="Enter your phone number" required />
  //             </div>
  //             <div className="col-md-6">
  //               <label className="form-label">College Name</label>
  //               <input type="text" className="form-control" placeholder="Enter your college name" required />
  //             </div>
  //             <div className="col-md-3">
  //              <label className="form-label">Branch</label>
  //              <input type="text" className="form-control" placeholder="e.g., CSE, ECE" required />
  //             </div>
  //             <div className="col-md-3">
  //               <label className="form-label">Year of Study</label>
  //               <select className="form-select" required>
  //               <option value="">Select Year</option>
  //               <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option>
  //               </select>
  //             </div>
  //             <div className="col-md-6">
  //               <label className="form-label">Current CGPA</label>
  //               <input type="text" className="form-control" placeholder="e.g., 8.5" required />
  //             </div>
  //             <div className="col-md-6">
  //               <label className="form-label">Upload Resume</label>
  //               <input type="file" className="form-control" required />
  //             </div>
  //             <div className="col-12">
  //               <label className="form-label">Why do you want to join this internship?</label>
  //               <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
  //             </div>
  //             <div className="col-12 text-center">
  //              <button type="submit" className="btn btn-primary px-4 py-2 mt-3">Submit Application</button>
  //             </div>
  //          </form>
  //         </div>
  //       </div>
  //   </>
  // );
  return (
    <>
      <div className="student-intern-section">
        <h1 className="intern-heading">Welcome Future Intern!</h1>
        <p className="intern-quote">
          “Your future is created by what you do today, not tomorrow.”
        </p>
      </div>

      <div className="intern-info-section">
        <div className="intern-text">
          <h2>Explore Internship Opportunities</h2>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Data Analytics</li>
            <li>AI & Machine Learning</li>
            <li>Cloud & DevOps</li>
          </ul>
          <p>
            Interns work on real-world projects, receive mentorship, and build a
            professional portfolio for their careers.
          </p>
        </div>
        <div className="intern-image">
          <img src="/intern.jpg" alt="Internship" />
        </div>
      </div>

      <div className="intern-form-section container py-5">
        <h2 className="text-center fw-bold mb-2 animate-heading">
          Apply for Internship
        </h2>
        <h4 className="text-center text-primary mb-4 animate-subheading">
          Fill the form
        </h4>
        <div className="card shadow-lg p-4 rounded animate-form">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                className="form-control"
                placeholder="Enter your first name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                className="form-control"
                placeholder="Enter your last name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                className="form-control"
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">College Name</label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                className="form-control"
                placeholder="Enter your college name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                className="form-control"
                placeholder="e.g., CSE, ECE"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Year of Study</label>
              <select
                name="yearOfStudy"
                value={formData.yearOfStudy}
                className="form-select"
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Current CGPA</label>
              <input
                type="text"
                name="cgpa"
                value={formData.cgpa}
                className="form-control"
                placeholder="e.g., 8.5"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Upload Resume</label>
              <input
                type="file"
                className="form-control"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">
                Why do you want to join this internship?
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                className="form-control"
                rows="4"
                placeholder="Your message..."
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 mt-3"
              >
                Submit Application
              </button>
              <p className = "text-muted ">Warning!: After clicking on submit wait for a sec until you see Thank you message</p>
              <p className = "text-muted">Don't click Submit multiple times</p>
            </div>
          </form>

          {message && (
            <div className="alert alert-info text-center mt-3">{message}</div>
          )}
        </div>
        <div className="col-12 text-center mt-5">
            <Link to="/careers">
            <button type="button" className="back-btn">← Back</button></Link>
          </div>
      </div>
    </>
  );
};

export default StudentIntern;
