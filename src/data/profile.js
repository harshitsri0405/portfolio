// All personal details live here. Edit this file to change text or links on the site.

export const profile = {
  name: 'Harshit Srivastava',
  headline: "Python Developer | Machine Learning & NLP | B.Tech CSE '27",
  intro:
    'I build Python applications that use machine learning and NLP, from cleaning the data to training models and putting them behind a Streamlit or FastAPI interface.',
  email: 'harshitsri0405@gmail.com',
  phone: '+91 95551 20712',
  phoneHref: '+919555120712',
  location: 'Raebareli, India',
  github: 'https://github.com/harshitsri0405',
  linkedin: 'https://www.linkedin.com/in/harshit-srivastava-9015aa312/',
  resume: '/Harshit_Srivastava_Resume.pdf',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

// Real workflow from the MailShield AI project (taken from the resume).
export const pipeline = [
  { step: 'Raw email text', detail: 'Spam and legitimate emails' },
  { step: 'Preprocessing', detail: 'Tokenization, stopword removal' },
  { step: 'Features', detail: 'TF-IDF vectorization' },
  { step: 'Models', detail: 'Naive Bayes, SVM, Logistic Regression' },
  { step: 'Evaluation', detail: 'Compare accuracy across models' },
  { step: 'Interface', detail: 'Streamlit app' },
]

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science and Engineering student at Dr. K. N. Modi Institute of Engineering & Technology, graduating in 2027.",
    "My work centres on Python, machine learning and NLP. I have built a spam classifier, an interview-preparation platform that uses LLMs, and a student dropout-risk model. Each one takes data through preprocessing, training and evaluation, and ends in something a person can use.",
    'In 2026 I completed two remote internships: Python development at Labmentix and AI at Codec Technologies. They gave me practice in debugging, code optimization and the full model-training workflow.',
  ],
  facts: [
    { label: 'Studying', value: 'B.Tech, Computer Science & Engineering' },
    { label: 'Graduating', value: '2027' },
    { label: 'Based in', value: 'Raebareli, India' },
    { label: 'Looking for', value: 'AI/ML and Python internships and entry-level roles' },
  ],
}

export const skills = [
  { group: 'Programming', items: ['Python', 'C', 'Java', 'SQL'] },
  {
    group: 'Machine learning & AI',
    items: [
      'Supervised learning',
      'Unsupervised learning',
      'Deep learning',
      'Neural networks',
      'CNN',
      'NLP',
      'LLMs',
    ],
  },
  {
    group: 'Frameworks & libraries',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI'],
  },
  { group: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { group: 'Web', items: ['React', 'Tailwind CSS'] },
  { group: 'Tools & platforms', items: ['Git', 'GitHub', 'Streamlit', 'VS Code', 'Google Colab'] },
]
export const experience = [
  {
    role: 'Python Developer Intern',
    company: 'Labmentix Pvt. Ltd.',
    period: 'Jul 2026 – Sep 2026',
    location: 'Remote',
    points: [
      'Developed Python-based solutions and applications as part of real-world development projects.',
      'Applied debugging, problem-solving and code optimization techniques to improve application functionality.',
      'Completed a 2-month hands-on internship focused on Python development, data processing and real-world application development.',
    ],
    stack: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Git/GitHub', 'Jupyter Notebook', 'VS Code'],
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'Codec Technologies',
    period: 'Jun 2026 – Jul 2026',
    location: 'Remote',
    points: [
      'Learned and applied core machine learning and AI concepts, including data preprocessing, model training and evaluation.',
      'Built MailShield AI, achieving 95% accuracy in spam email detection.',
      'Developed a weather prediction model using regression techniques.',
    ],
    stack: ['Python', 'NLP', 'Scikit-learn', 'Machine Learning', 'Pandas', 'NumPy', 'FastAPI'],
  },
]

export const education = {
  institution: 'Dr. K. N. Modi Institute of Engineering & Technology',
  location: 'Modinagar, Uttar Pradesh',
  degree: 'B.Tech, Computer Science & Engineering',
  years: '2023 – 2027',
  sgpa: '7.67',
}
export const achievements = [
  { result: '3rd position', title: 'Technophilia 2026', detail: '' },
  { result: 'Winner', title: 'SIH 2025 and 2026 Internal Hackathons', detail: '' },
  {
    result: 'Participant',
    title: 'Innovate Bharat Hackathon 2026',
    detail: 'AI & Intelligent Systems theme',
  },
  {
    result: 'Participant',
    title: 'Technex 2026 Innovation Competition',
    detail: 'Associated with IIT BHU',
  },
]

// Certificate images live in public/certificates/. `url` is an optional verification link:
// add it only when you have the real URL, otherwise leave it null.
export const certifications = [
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'July 2026',
    note: 'Valid until July 2028',
    image: '/certificates/oracle-agentic-ai.jpg',
    url: null,
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte, via Forage',
    date: 'June 2026',
    note: '',
    image: '/certificates/deloitte-data-analytics.jpg',
    url: null,
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'TATA, via Forage',
    date: 'June 2026',
    note: '',
    image: '/certificates/tata-genai-data-analytics.jpg',
    url: null,
  },
  {
    title: 'Digital 101 Journey',
    issuer: 'NASSCOM FutureSkills Prime',
    date: 'November 2024',
    note: '',
    image: '/certificates/nasscom-digital-101.jpg',
    url: null,
  },
  {
    title: 'Introduction to Cybercrime',
    issuer: 'Simplilearn SkillUP',
    date: 'January 2025',
    note: '',
    image: '/certificates/simplilearn-cybercrime.jpg',
    url: null,
  },
]