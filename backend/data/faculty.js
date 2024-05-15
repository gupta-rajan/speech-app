const faculty = [
  {name: "Sample Faculty",
      image: "/images/sample.jpg",
      email: "sample@example.com",
      bio: "Sample Bio",
      areaOfInterest: "Sample Interest",
      department: "Sample Department",
      officeAddress: "Sample Office",
      labAddress: "Sample Lab",
      phdStudents: [],
      msStudents: [],
      mtechStudents: [],
      btechStudents: [],
      publications: "",},
  {
    name: 'Prof. S. R. Mahadeva Prasanna',
    image: '/images/faculty/mahadeva-prasanna.png',
    email: 'prasanna@iitdh.ac.in',
    bio: `Professor, Dept. of Electrical, Electronics and Communication Engineering, Dean (Faculty Welfare)`,
    areaOfInterest: 'Speech and Handwriting Processing, Applications of Signal Processing and Pattern Recognition, Applications of Artificial Intelligence, Machine Learning and Deep Learning',
    personalWeb: 'https://sites.google.com/iitdh.ac.in/prasanna/home',
    linkedin: 'https://www.linkedin.com/in/mahadeva-prasanna-1b238b1a4/',
    scholarLink: 'https://scholar.google.co.in/citations?user=gakbTtAAAAAJ&hl=en',
    department: 'EECE',
    officeAddress: 'Academic Block I (Engineering Block), Room No. 616',
    labAddress: 'Academic Block I (Engineering Block), Room No. 329',
    phdStudents: ['Jagabandhu Mishra', 'Lalaram Arya', 'Tonmoy Rajkhowa'],
    msStudents: ['Sougata Mukherji', 'Rishith Sadashiv T N', 'Kumar Kaustubh'],
    mtechStudents: ['Lokesh Kumar'],
    publications: 'https://scholar.google.co.in/citations?user=gakbTtAAAAAJ&hl=en'
  }, 
  {
    name: 'Dr. Dileep A. D.',
    image: '/images/faculty/dileep-ad.png',
    email: 'addileep@iitdh.ac.in',
    bio: `Dr. Dileep A. D. is presently working as an Associate Professor in the Department of Computer Science and Engineering at Indian Institute of Technology Dharwad (IIT Dharwad), Karnataka (Since Dec 2023). He is also serving as head of the CSE department at IIT Dharwad. Prior to this he was working in the position of Assistant Professor and later as Associate Professor at School of Computing and Electrical Engineering, IIT Mandi during Aug. 2013 to Dec. 2023. Dr. Dileep has a PhD and MTech degrees awarded by the Department of Computer Science and Engineering at IIT Madras in the year 2013 and 2006 respectively. He completed his BE in Computer Science and Engineering from Rural Engineering College, Bhalki affiliated to Gulbarga University in the year 2000. During the year 2001 to 2004, he worked as lecturer in the Department of Information Science at NMAM Institute of Technology Nitte, Karnataka. His research interests include applied machine learning and deep learning, speech technology, spoken language identification and diarization, computer vision, machine learning for telecom and cloud networks.`,
    areaOfInterest: 'Applied machine learning and deep learning, Speech technology, Computer vision, Machine learning for telecom and cloud networks',
    personalWeb: 'https://faculty.iitmandi.ac.in/~addileep/',
    linkedin: 'NA',
    scholarLink: 'https://scholar.google.co.in/citations?user=fqQk1gcAAAAJ&hl=en',
    department: 'CSE',
    officeAddress: 'A1-230, IIT Dharwad Campus, Chikkamalligawad Village, Dharwad',
    labAddress: 'A1-511',
    phdStudents: [],
    msStudents: [],
    mtechStudents: [],
    btechStudents: [],
    publications: 'https://drive.google.com/drive/folders/10aVnwols6nZpjfO9-r-qv8MyzHgXfU3Y?usp=drive_link'
  },
  {
    name: 'Dr. Vandana Bharti',
    image: '/images/faculty/vandana-bharti.png',
    email: 'vandana@iitdh.ac.in',
    bio: `Dr. Vandana Bharti holds a Ph.D. in Computer Science and Engineering from the esteemed Indian Institute of Technology (BHU), Varanasi, India. As an Assistant Professor in the Department of Computer Science and Engineering at Indian Institute of Technology Dharwad, she is actively shaping the academic landscape. Driven by a commitment to technological advancement, her research spans various domains, with a particular emphasis on machine learning, deep learning, evolutionary multiobjective optimization, generative AI, and computer vision. Dr. Bharti boasts a robust publication record, featuring contributions to top peer-reviewed journals, and conferences, underscoring her impactful presence in the academic and technological spheres. Her multidisciplinary expertise reflects a dedication to pushing the boundaries of technology, making her a valuable contributor to the field.`,
    areaOfInterest: 'Machine Learning, Deep Learning, Generative AI, Computer Vision, Evolutionary Multiobjective Optimization, Quantum-Inspired Optimization',
    personalWeb: 'https://sites.google.com/iitdh.ac.in/vandana',
    linkedin: 'https://www.linkedin.com/in/vandana-bharti/',
    scholarLink: 'https://scholar.google.com/citations?user=F5Ogae4AAAAJ&hl=en',
    department: 'CSE',
    officeAddress: 'A1-406, Engineering Block, IIT Dharwad',
    labAddress: 'Machine Intelligence and Data Science Lab, Room no 511',
    publications: 'https://sites.google.com/iitdh.ac.in/vandana/publications?authuser=0'
  },
  {
    name: "Prof. Rajesh M. Hegde",
    image: "/images/faculty/rajesh-m-hegde.png",
    email: "rmhegde@iitdh.ac.in",
    bio: "Experienced Professor with a demonstrated history of working in the higher education industry. Skilled in Research and Development (R&D), Mathematical Modeling, Data Analysis, Algorithms, and Teaching. Strong education professional with a Ph.D focused in Computer Science Engg. from Indian Institute of Technology, Madras.",
    areaOfInterest: "Machine Learning, AI, future wireless networks, pervasive/mobile communication, WSN, IoT, speech/audio processing for ASR and VR, and multimodal information fusion.",
    personalWeb: "https://rajeshmhegde.com/",
    linkedin: "https://www.linkedin.com/in/rajeshmhegde",
    scholarLink: "https://iitk.irins.org/profile/53494",
    department: "EECE",
    officeAddress: "A1",
    labAddress: "-",
    phdStudents: [],
    msStudents: ["Chandan R"],
    mtechStudents: [],
    btechStudents: [],
    publications: "https://iitk.irins.org/profile/53494"
  },  
  {
    name: 'Achyut Mani Tripathi',
    image: '/images/faculty/achyut-mani-tripathi.png',
    email: 't.achyut@iitdh.ac.in',
    bio: `Prof. Achyut Mani Tripathi is an Assistant Professor in the Computer Science & Engineering Department 
    at Indian Institute of Technology Dharwad (IIT-Dh) in Karnataka, India. He completed his Ph.D. in 2021 from the 
    Computer Science & Engineering Department at Indian Institute of Technology Guwahati (IIT-Guwahati) in Assam, India.`,
    areaOfInterest: 'Deep Learning for Environmental Sound Classification, Adversarial Attacks, Knowledge Distillation, Multimodal Learning, Audio-Visual Scene Classification (AVSC), Audio-Visual Question Answering (AVQA), Audio Visual Source Localization(AVSL), Audio-Visual Segmentation (AVS), Continual Learning for Audio Classification and Predictive Maintenance',
    personalWeb: 'https://achyutmani.github.io/',
    linkedin: 'https://www.linkedin.com/in/achyut-mani-tripathi-1487b92a3/',
    scholarLink: 'https://scholar.google.co.in/citations?user=i0reLQMAAAAJ&hl=en',
    department: 'CSE',
    officeAddress: 'Engineeering Block (A1)-129',
    labAddress: '624',
    phdStudents: [],
    msStudents: [],
    mtechStudents: [],
    btechStudents: [],
    publications: "5"
  },
  {
    name: 'Dr. Jivnesh Sandhan',
    image: '/images/faculty/jivnesh.png',
    email: 'jivnesh@iitdh.ac.in',
    bio: `Dr. Jivnesh Sandhan is a visiting assistant professor at IIT Dharwad in the Department of Computer Science. 
    Prior to that, he remotely worked as a post-doctoral scholar in the Electrical Engineering and Computer Sciences 
    (EECS) department at the University of California, Berkeley. He completed his Ph.D. in the Department of Electrical 
    Engineering from IIT Kanpur in 2023, where he also earned a dual degree in the Department of Mathematics and 
    Scientific Computing in 2018. He received the prestigious Prime Minister's Research Fellowship (PMRF). His research 
    expertise is Natural Language Processing (NLP) for Sanskrit Computational Linguistics. His primary research objective 
    is to enhance accessibility to Sanskrit literature for pedagogical and annotation purposes. To achieve this goal, he has 
    developed cutting-edge deep-learning-based solutions for various downstream tasks in Sanskrit. His scholarly endeavors 
    have resulted in several publications in high-ranking conference venues, including CORE-ranking A*/A conferences. His 
    current research revolves around developing a Sanskrit-to-English machine translation system to provide accessibility to 
    Vedic literature. Through his work, he seeks to bridge the language barrier and contribute to a broader understanding and 
    appreciation of ancient Sanskrit texts.`,
    areaOfInterest: 'Natural Language Processing, Deep learning, Machine learning, Sanskrit Computational Linguistics',
    personalWeb: 'https://jivnesh.github.io/',
    linkedin: 'https://www.linkedin.com/in/dr-jivnesh-sandhan-5ba02a9a/',
    scholarLink: 'https://scholar.google.co.in/citations?user=R-W9HXYAAAAJ&hl=en',
    department: 'CSE',
    officeAddress: 'A1-403',
    labAddress: 'A1-403',
    publications: 'https://docs.google.com/spreadsheets/d/1I11zlXPP8jZazx7UezWTKOvXX7TeIH5kVb3RlM2cRS0/edit?usp=sharing'
  },
  {
    name: 'Dr. Konjengbam Anand',
    image: '/images/faculty/konjengbam-anand.png',
    email: 'konjengbam.anand@iitdh.ac.in',
    bio: `Dr. Konjengbam Anand is an Assistant Professor at Indian Institute of Technology Dharwad, India. He has held 
    previous positions as an Assistant Professor at Manipur Technical University and IIIT Kottayam. He was a recipient of 
    the prestigious Suzuki Foundation Grant 2019-2020 and also worked as a researcher at Nagayoshi Laboratory, Shizuoka 
    University, Japan during the period. He completed his Ph.D. in Computer Science & Engineering at IIT Hyderabad. His 
    research interests encompass a wide range of topics such as data mining, natural language processing, sentiment analysis, 
    machine translation, and information management.`,
    areaOfInterest: 'Natural Language Processing, Machine Translation, Sentiment Analysis',
    personalWeb: 'https://sites.google.com/view/drkonjengbamanand/home',
    linkedin: 'https://www.linkedin.com/in/anand-konjengbam-9b691925/',
    scholarLink: 'https://scholar.google.com/citations?user=OpK0OmcAAAAJ&hl=en',
    department: 'CSE',
    officeAddress: 'A1-534',
    labAddress: 'Language Innovation Technology (LIT) Lab A1-624',
    publications: 'https://scholar.google.com/citations?user=OpK0OmcAAAAJ&hl=en'
  },
  {
    name: 'Dr. Samba Raju. Chiluveru',
    image: '/images/faculty/samba-raju-chiluveru.png',
    email: 'sambaee@iitdh.ac.in',
    bio: `Dedicated and dynamic Assistant Professor with a strong commitment to fostering an inclusive and engaging learning 
    environment.`,
    areaOfInterest: 'Edge computing accelerator for ML/AI applications, High-performance deep learning accelerators, Inference model optimizations, Speech processing/enhancement, and Digital signal processing',
    personalWeb: 'https://www.iitdh.ac.in/sites/default/files/2023-11/CV_Sambaraju%2520%25281%2529.pdf',
    linkedin: 'https://www.linkedin.com/in/dr-sambaraju-chiluveru-97426529?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    scholarLink: 'https://scholar.google.com/citations?user=DMCWWdAAAAAJ&hl=en&authuser=2',
    department: 'EECE',
    officeAddress: '340, Engineering block, IIT Dharwad',
    labAddress: '319'
  },
  {
    name: 'Dr. Shashaank Mattur Aswatha',
    image: '/images/faculty/shashaank-mattur-aswatha.png',
    email: 'matturas@iitdh.ac.in',
    bio: `Dr. Shashaank Aswatha Mattur is a faculty of Electrical, Electronics, and Communication Engineering, Indian 
    Institute of Technology Dharwad. He completed his PhD and MS (by Research) degrees from the Indian Institute of 
    Technology Kharagpur. He was a post-doctoral fellow at the University of Poitiers, France. He has worked as a 
    senior Research Engineer in Philips Research, India. His primary research interests are in signal/image processing, 
    computer vision, pattern recognition, and applied machine learning. His domains of focus mainly include satellite 
    imaging and remote sensing, Indian digital heritage, plant phenology, medical image analysis, and computational 
    photography.`,
    areaOfInterest: 'Digital Image Processing, Computer Vision, Pattern Recognition, Applied Machine Learning, and Remote Sensing',
    personalWeb: 'https://sites.google.com/iitdh.ac.in/matturas',
    linkedin: 'https://www.linkedin.com/in/beingmas/',
    scholarLink: 'https://dblp.org/pid/161/0825.html',
    department: 'EECE',
    officeAddress: 'No. 335, Academic block - 1 (Engineering)',
    labAddress: 'Yet to be decided',
    phdStudents: ['Sankalp Nagaonkar'],
    msStudents: ['Rashmi Singh', 'Shivam Kumar']
  }, 
];
  
export default faculty;  