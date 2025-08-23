import { useEffect, useState } from 'react';
import './graduate.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Graduate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // States for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [resume, setResume] = useState(null);
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState('');
  const [motivation, setMotivation] = useState('');

  const [educationList, setEducationList] = useState([
    { degree: '', institution: '', year: '', cgpa: '' }
  ]);

  const handleEducationChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setEducationList(updatedList);
  };

  const handleAddEducation = () => {
    setEducationList([...educationList, { degree: '', institution: '', year: '', cgpa: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append('firstName', firstName);
  //     formData.append('lastName', lastName);
  //     formData.append('email', email);
  //     formData.append('phoneNumber', phoneNumber);
  //     formData.append('collegeName', collegeName);
  //     formData.append('graduationYear', graduationYear);
  //     formData.append('cgpa', cgpa);
  //     formData.append('gender', gender);
  //     formData.append('skills', skills);
  //     formData.append('motivation', motivation);

  //     // Resume upload
  //     if (resume) {
  //       formData.append('resume', resume);
  //     }

  //     // Education details (send as JSON string)
  //     formData.append('educationDetails', JSON.stringify(educationList));

  //     // Send request to backend
  //     await axios.post("http://localhost:9090/api/careers/graduates/apply", formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });

  //     navigate('/careers/thank-you'); 
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('Something went wrong. Please try again.');
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // Construct the application object
    const applicationData = {
      firstName,
      lastName,
      email,
      phone: phoneNumber,
      college: collegeName,
      graduationYear: parseInt(graduationYear),
      cgpa: parseFloat(cgpa),
      gender,
      skills,
      motivation,
      educationDetails: educationList.map((edu) => ({
        degree: edu.degree,
        institution: edu.institution,
        year: parseInt(edu.year),
        cgpa: parseFloat(edu.cgpa)
      }))
    };

    // Append application JSON as raw string
    formData.append('application', JSON.stringify(applicationData));

    // Append resume file
    if (resume) {
      formData.append('resume', resume);
    }

    // ✅ DO NOT set headers manually
    await axios.post("http://localhost:9090/api/careers/graduates/apply", formData);

    navigate('/careers/thank-you');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Something went wrong. Please try again.');
  }
};



  return (
    <>
      <div className="graduate-section">
        <h1 className="graduate-heading">Welcome Graduate!</h1>
        <p className="graduate-quote">"Your degree is just the beginning, not the end. Let’s build your future together."</p>
      </div>

      <div className="graduate-info-section">
        <div className="graduate-text">
          <h2>Launch Your Career with Us</h2>
          <ul>
            <li>Graduate Trainee Programs</li>
            <li>Software Development Roles</li>
            <li>Project Management</li>
            <li>Business Analysis</li>
            <li>Tech Support & More</li>
          </ul>
          <p>Join our team and apply your academic knowledge to real-world challenges, guided by experienced mentors and innovative environments.</p>
        </div>
        <div className="graduate-image">
          <img src="/graduate (2).jpeg" alt="Graduate Program" />
        </div>
      </div>

     <div className="graduate-form-section container py-5">
      <h2 className="text-center fw-bold animate-heading">Apply as a Graduate</h2>
      <h4 className="text-center text-success mb-4 animate-subheading">Start your career with us</h4>

      <div className="card shadow-lg p-4 rounded animate-form">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="Enter your first name" required
              value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Enter your last name" required
              value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" placeholder="Enter your phone number" required
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label className="form-label">University/College Name</label>
            <input type="text" className="form-control" placeholder="Enter your institution name" required
              value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
          </div>
          <div className="col-md-3">
            <label className="form-label">Graduation Year</label>
            <input type="text" className="form-control" placeholder="e.g., 2024" required
              value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
          </div>
          <div className="col-md-3">
            <label className="form-label">Current CGPA</label>
            <input type="text" className="form-control" placeholder="e.g., 8.5" required
              value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label className="form-label">Upload Resume</label>
            <input type="file" className="form-control" required
              onChange={(e) => setResume(e.target.files[0])} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select className="form-select" required
              value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-12 education-section">
            <label className="form-label">Education Details</label>
            {educationList.map((edu, index) => (
              <div className="education-entry row g-2 mb-3" key={index}>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CGPA"
                    value={edu.cgpa}
                    onChange={(e) => handleEducationChange(index, 'cgpa', e.target.value)}
                  />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <button type="button" className="btn btn-danger" onClick={() => handleRemoveEducation(index)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            <button type="button" className="add-education-btn mt-2" onClick={handleAddEducation}>
              <i className="bi bi-plus-circle"></i> Add Education
            </button>
          </div>

          <div className="col-md-12">
            <label className="form-label">Skills</label>
            <input type="text" className="form-control" placeholder="e.g., Java, React, SQL, Python"
              value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>

          <div className="col-md-12">
            <label className="form-label">Why do you want to join us?</label>
            <textarea className="form-control" rows="4" placeholder="Your message..." required
              value={motivation} onChange={(e) => setMotivation(e.target.value)}></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-4 py-2 mt-3">Submit Application</button>
              <p className = "text-muted ">Warning!: After clicking on submit wait for a sec until you see Thank you message</p>
              <p className = "text-muted">Don't click Submit multiple times</p>
          </div>          
        </form>
      </div>
      <div className="col-12 text-center mt-5">
            <Link to="/careers">
            <button type="button" className="back-btn">← Back</button></Link>
          </div>
      </div>
    </>
  );
};

export default Graduate;
