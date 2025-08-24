import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../pages/JobForm.css";

function JobForm() {
  const navigate = useNavigate();

  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const applicationData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        gender: formData.get("gender"),
        email: formData.get("email"),
        mobile: formData.get("mobile"),
        college: formData.get("college"),
        graduationYear: formData.get("graduationYear"),
        roleApplied: formData.get("roleApplied"),
        preferredLocation: formData.get("preferredLocation"),
        skills: formData.get("skills"),
        resumePath: "",
        experienceDetails: [],
        educationDetails: []
      };

      const resumeFile = formData.get("resume");
      if (resumeFile && resumeFile.name) {
        applicationData.resumePath = resumeFile.name;
      }

      if (showExperienceForm) {
        applicationData.experienceDetails.push({
          companyName: formData.get("experienceCompany"),
          rolePosition: formData.get("experienceRole"),
          yearsOfExperience: formData.get("experienceYears")
        });
      }

      if (showEducationForm) {
        applicationData.educationDetails.push({
          institutionName: formData.get("educationInstitution"),
          degreeQualification: formData.get("educationDegree"),
          graduationYear: formData.get("educationYear")
        });
      }

      const payload = new FormData();
      payload.append("application", JSON.stringify(applicationData));
      if (resumeFile && resumeFile.name) {
      payload.append("resume", resumeFile);
    }

      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      await axios.post(`${backendUrl}/api/careers/experienced/job-applications/apply`, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    navigate("/careers/thank-you");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Submission failed. Please check your inputs and try again.");
  }
};

  return (
    <div className="apply">
      <div className="container mt-5 p-4 job-form bg-white rounded shadow-lg">
        <div className="text-center mb-4">
          <img src="/logo.jpg" alt="Logo" height="80" />
          <h2 className="mt-2 text-primary fw-bold">Techlynx Innovations Pvt. Ltd.</h2>
          <h4 className="text-secondary">Job Application Form</h4>
          <p className="text-muted">
            All Applicants are requested to fill this form to get interview notification.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label"> First Name *</label>
              <input type="text" name="firstName" placeholder="Enter Your Name" className="form-control input-hover" required />
            </div>

            <div className="col-md-6">
              <label className="form-label"> Last Name *</label>
              <input type="text" name="lastName" placeholder="Enter Your Name" className="form-control input-hover" required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Gender *</label>
              <select name="gender" className="form-select input-hover" required>
                <option value="">Select an option</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <input type="email" name="email" placeholder="xyz@example.com" className="form-control input-hover" required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Mobile Number *</label>
              <input type="tel" name="mobile" placeholder="Enter Your Mobile Number" className="form-control input-hover" required />
            </div>

            <div className="col-md-6">
              <label className="form-label">College Name *</label>
              <input type="text" name="college" placeholder="Enter Your College Name" className="form-control input-hover" required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Graduate Year *</label>
              <select name="graduationYear" className="form-select input-hover" required>
                <option value="">Select your year</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Applying for *</label>
              <select name="roleApplied" className="form-select input-hover" required>
                <option value="">Select a role</option>
                <option>Java Full Stack Developer</option>
              <option>Python Full Stack Developer</option>
              <option>Cloud Engineer</option>
              <option>UI/UX Designer</option>
              <option>DevOps Engineer</option>
              <option>Technical Support</option>
              <option>Frontend Developer</option>
              <option>Data Analyst</option>
              <option>AI/ML Engineer</option>
              <option>Business Analyst</option>
              <option>Mobile App Developer</option>
              <option>QA Tester</option>
              <option>Network Engineer</option>
              <option>System Administrator</option>
              <option>Security Analyst</option>
              <option>Digital Marketing Specialist</option>
              <option>Project Manager</option>
              <option>Product Owner</option>
              <option>Content Writer</option>
              <option>Graphic Designer</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Upload Resume</label>
              <input type="file" name="resume" className="form-control input-hover" />
            </div>

            <div className="col-md-6"></div>

            <div className="col-md-6">
              <label className="form-label">Preferred Location *</label>
              <select name="preferredLocation" className="form-select input-hover" required>
                <option value="">Select a location</option>
                <option>Guntur</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div className="col-md-6"></div>

            <div className="col-md-6">
              <label className="form-label">Add your Skills *</label>
              <input type="text" name="skills" placeholder="Skills" className="form-control input-hover" />
            </div>

            {/* Experience Section */}
            <div className="col-12">
              <p
                className="text-primary fw-semibold clickable"
                onClick={() => setShowExperienceForm(!showExperienceForm)}
              >
                + Add Experience Details
              </p>
              {showExperienceForm && (
                <div className="card p-3 mb-3">
                  <input name="experienceCompany" className="form-control mb-2" placeholder="Company Name" />
                  <input name="experienceRole" className="form-control mb-2" placeholder="Role / Position" />
                  <input name="experienceYears" className="form-control mb-2" placeholder="Years of Experience" />
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="col-12">
              <h5 className="fw-bold">Education Details</h5>
              <p
                className="text-primary fw-semibold clickable"
                onClick={() => setShowEducationForm(!showEducationForm)}
              >
                + Add Education Details
              </p>
              {showEducationForm && (
                <div className="card p-3 mb-3">
                  <input name="educationInstitution" className="form-control mb-2" placeholder="School / College Name" />
                  <input name="educationDegree" className="form-control mb-2" placeholder="Degree / Qualification" />
                  <input name="educationYear" className="form-control mb-2" placeholder="Year of Graduation" />
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary mt-3 submit-btn">
                Submit Application
              </button>
              <p className = "text-muted ">Warning!: After clicking on submit wait for a sec until you see Thank you message</p>
              <p className = "text-muted">Don't click Submit multiple times</p>
            </div>
          </div>
        </form>
              <div className="col-12 text-center mt-5">
            <Link to="/careers">
            <button type="button" className="back-btn">← Back</button></Link>
          </div>
      </div>

    </div>
  );
}

export default JobForm;