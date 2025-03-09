import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [overview, setOverview] = useState(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Fetch all data
    axios.get('http://localhost:8000/getOverview')
      .then(response => setOverview(response.data))
      .catch(error => console.error('Error fetching overview data', error));

    axios.get('http://localhost:8000/getEdu')
      .then(response => setEducation(response.data))
      .catch(error => console.error('Error fetching education data', error));

    axios.get('http://localhost:8000/getExp')
      .then(response => setExperience(response.data))
      .catch(error => console.error('Error fetching experience data', error));

    axios.get('http://localhost:8000/getSkills')
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching skills data', error));

    axios.get('http://localhost:8000/getCertifications')
      .then(response => setCertifications(response.data))
      .catch(error => console.error('Error fetching certifications data', error));
  }, []);

  return (
    <div className="resume-container">
      <h1>Online Resume</h1>

      {/* Overview */}
      {overview && (
        <section className="section">
          <h2>Overview</h2>
          <p><strong>Name:</strong> {overview.name}</p>
          <p><strong>Bio:</strong> {overview.bio}</p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <p key={index}>{edu.school} - {edu.degree} ({edu.year})</p>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="section">
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <p key={index}>{exp.company} - {exp.position} ({exp.year})</p>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="section">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="section">
          <h2>Certifications</h2>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default App;
