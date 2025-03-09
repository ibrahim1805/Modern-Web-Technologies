const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Enable CORS for all origins
app.use(cors());

// Sample resume data
const resumeData = {
  overview: { 
    name: 'Ibrahim Hagi', 
    bio: 'A passionate software developer with experience in React and Node.js.' 
  },
  education: [
    { school: 'Humber College', degree: 'Advanced Diploma in Computer Programming and Analysis', year: 2026 },
    { school: 'T.L.Kennedy Secondary School', degree: 'High School Diploma', year: 2023 }
  ],
  experience: [
    { company: 'Tech Corp', position: 'Software Engineer', year: '2022-2023' },
    { company: 'Code Solutions', position: 'Junior Developer', year: '2020-2022' }
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
  certifications: ['Certified React Developer', 'Node.js Certification']
};

// Routes to get resume data
app.get('/getOverview', (req, res) => {
  res.json(resumeData.overview);
});

app.get('/getEdu', (req, res) => {
  res.json(resumeData.education);
});

app.get('/getExp', (req, res) => {
  res.json(resumeData.experience);
});

app.get('/getSkills', (req, res) => {
  res.json(resumeData.skills);
});

app.get('/getCertifications', (req, res) => {
  res.json(resumeData.certifications);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
