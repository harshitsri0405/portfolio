// Project content. Everything here comes from the resume.
//
// To add real screenshots: put image files in public/projects/ and list them below, e.g.
//   screenshots: ['/projects/automock-home.png', '/projects/automock-interview.png']
// To show a Live Demo button, set `demo` to the deployed URL. Leave it null to hide the button.
// `metricNote` is optional: add dataset and split details (e.g. "UCI SMS Spam, 80/20 split") to back up the number.

export const projects = [
  {
    slug: 'automock-ai',
    title: 'AutoMock AI',
    tagline: 'AI-powered interview preparation platform',
    period: 'Apr 2026 – Jun 2026',
    summary:
      'Analyses a resume, generates interview questions from it or from a chosen topic, runs AI mock interviews and gives personalised feedback.',
    problem:
      "Interview preparation often relies on generic question lists that ignore a candidate's own resume and give no feedback on the answers.",
    solution:
      'AutoMock AI reads a resume, generates questions from it or from a topic, runs a mock interview and evaluates the answers with personalised feedback.',
    features: [
      'Resume analysis',
      'Resume-based interview question generation',
      'Topic-based question generation',
      'AI mock interviews',
      'Answer evaluation and personalised feedback',
      'Interactive Streamlit interface',
    ],
    approach: [
      'Integrates LLMs and machine learning for question generation and answer evaluation.',
      'Works with the Gemini API and local LLMs.',
      'Wraps the workflow in an interactive Streamlit interface.',
    ],
    stack: ['Python', 'Streamlit', 'Gemini API', 'Machine Learning', 'NLP', 'Local LLMs'],
    metric: null,
    metricNote: '',
    repo: 'https://github.com/harshitsri0405/AutoMock-AI-A-Local-AI-Powered-Interview-Preparation-and-Resume-Intelligence-Platform',
    demo: 'https://harshitsri0405-automock-ai-a-local-ai-pow-automock-aiapp-k8dwfn.streamlit.app/',
    screenshots: ['/projects/automock-home.webp', '/projects/automock-resume-analysis.webp'],
  },
  {
    slug: 'mailshield-ai',
    title: 'MailShield AI',
    tagline: 'Spam email detection with machine learning',
    period: 'Jul 2026 – Aug 2026',
    summary:
      'A text-classification model that labels emails as spam or legitimate, using NLP preprocessing and TF-IDF features.',
    problem: 'Unwanted email buries legitimate messages, so it has to be filtered automatically.',
    solution:
      'A classifier trained on preprocessed email text that labels each email as spam or legitimate. Three algorithms were trained and evaluated to find the best performer.',
    features: [
      'Spam versus legitimate email classification',
      'NLP preprocessing: tokenization and stopword removal',
      'TF-IDF vectorization of email text',
      'Naive Bayes, SVM and Logistic Regression compared',
      'Streamlit interface',
    ],
    approach: [
      'Preprocess the raw email text with tokenization and stopword removal.',
      'Convert the cleaned text to TF-IDF vectors.',
      'Train Naive Bayes, SVM and Logistic Regression models.',
      'Evaluate the models and compare their accuracy.',
    ],
    stack: ['Python', 'NLP', 'Machine Learning', 'Streamlit'],
    metric: { value: '95%', label: 'spam-detection accuracy' },
    metricNote: '',
    repo: 'https://github.com/harshitsri0405/MailSheild-AI-AI-Powered-spam-phishing-email-Threat-detection-system',
    demo: null,
    screenshots: ['/projects/mailshield-threat-report.webp', '/projects/mailshield-console.webp'],
  },
  {
    slug: 'student-dropout-risk',
    title: 'No Drop',
    tagline: 'Finding at-risk students from academic and demographic data',
    period: 'Mar 2026 – Apr 2026',
    summary:
      'A machine learning model that predicts which students are at risk of dropping out, trained and compared across three classifiers.',
    problem:
      'Institutions need to spot students at risk of leaving early so they can step in sooner.',
    solution:
      'A model trained on academic and demographic data that predicts at-risk students, with a reproducible framework for data-driven interventions.',
    features: [
      'Predicts at-risk students from academic and demographic data',
      'Logistic Regression, Decision Tree and Random Forest trained and evaluated',
      'Reproducible training and evaluation framework',
    ],
    approach: [
      'Prepare the student data with Pandas and NumPy.',
      'Train Logistic Regression, Decision Tree and Random Forest models with Scikit-learn.',
      'Evaluate and compare the models in a repeatable way.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    metric: { value: '85%+', label: 'model accuracy' },
    metricNote: '',
    repo: 'https://github.com/harshitsri0405/AI-Based-Student-Dropout-Risk-Prediction',
    demo: 'https://dropout-prediction-codexnodrop.streamlit.app/',
    screenshots: ['/projects/nodrop-individual.webp', '/projects/nodrop-bulk.webp'],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)