/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Usama",
    title: "Hi, I'm M. Usama Akhtar",
    subTitle: "A Software Engineer focused on Software Quality and Testing, with experience in frontend development and cloud essentials.",
  resumeLink:
    "https://drive.google.com/file/d/1Y9ly-Ykk5FQIKgJBTnBWBrtFPvIi7x4q/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/musamaakhtar-tech/", 
  linkedin: "", 
  gmail: "musamaakhtar63@gmail.com", 
  facebook: "https://www.facebook.com/musamaakhtar.tech/", 
  medium: "https://medium.com/@UACodeHorizon/", 
  twitter: "https://x.com/tech_mua/", 
  instagram: "https://www.instagram.com/mua.tech/", 
  stackoverflow: "https://stackoverflow.com/users/31249735/m-usama-akhtar/", 
  display: true // Set false to hide this section Kaggle are also supported in the links! To customize icons and social links, tweak src/components/SocialMedia
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND & SOFTWARE QUALITY ENTHUSIAST EXPLORING DEVELOPMENT, TESTING, AND CLOUD TOOLS",
  skills: [
    emoji("⚡ Develop interactive and responsive Frontend UIs using HTML, CSS, JavaScript"),
    emoji("⚡ Perform software prototyping and testing with a focus on quality assurance"),
    emoji("⚡ Work with cloud platforms like AWS and basic database management using MySQL")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Sketch",
      fontAwesomeClassname: "fab fa-sketch"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Central Punjab, Lahore",
      logo: require("./assets/images/UCP_Logo.png"), 
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "October 2020 - October 2024",
      desc: "Specialization in Software Quality and Testing with hands-on experience in software development and UI design.",
      descBullets: [
        "Completed projects like NexGen-Arcade focused on gaming community needs.",
        "Gained skills in C++, Java, HTML, MySQL, and software testing."
      ]
    },
    {
      schoolName: "Punjab Group of Colleges, Daska",
      logo: require("./assets/images/PGC_Logo.png"), 
      subHeader: "F.Sc (Pre-Engineering)",
      duration: "September 2017 - March 2019",
      desc: "Focused on mathematics, physics, and foundational computing concepts.",
      descBullets: [
        "Prepared for engineering studies with a strong focus on analytical problem-solving."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "85%" // Strong due to internship & HTML/CSS/JS knowledge
    },
    {
      Stack: "Database & Cloud",
      progressPercentage: "60%" // MySQL and AWS (via certification)
    },
    {
      Stack: "Programming & OOP Concepts",
      progressPercentage: "50%" // Based on C++, Java, Python, and your learning stage
    }
  ],
  displayCodersrank: false // Set to true if you use CodersRank and update your username
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Development Intern",
      company: "CodeAlpha",
      companylogo: require("./assets/images/CodeAlpha-Logo.jfif"), 
      date: "August 2024 – September 2024",
      desc: "Contributed to frontend development projects, enhancing user interfaces and improving component functionality.",
      descBullets: [
        "Worked with HTML, CSS, JavaScript to build and refine UI components.",
        "Improved responsiveness and user interaction in web applications."
      ]
    },
    {
      role: "Quality Assurance Tester Intern",
      company: "Regional Plan 9",
      companylogo: require("./assets/images/RP9-Logo.jpg"), 
      date: "August 2023 – September 2023",
      desc: "Conducting comprehensive testing of software applications to ensure quality and functionality.",
      descBullets: [
        "Identifying, documenting, and reporting bugs and issues.",
        "Collaborating with the development team to resolve defects and enhance product quality.",
        "Executing test plans, scenarios, scripts, and procedures."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I BUILT DURING MY DEGREE AND INTERNSHIP",
  projects: [
    {
      image: require("./assets/images/NexGenArcade_Logo.png"), 
      projectName: "NexGen-Arcade",
      projectDesc: "A gaming store platform developed for the Pakistani gaming community, focusing on UI design, database management, and user engagement.",
      footerLink: [
        {
          name: "View Project (GitHub)",
          url: "https://github.com/musamaakhtar-tech/FYP-NexGen-Arcade" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and trainings that showcase my learning journey and technical growth.",

  achievementsCards: [
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "Completed this course on Coursera to understand core AWS services and cloud infrastructure basics. Skills: AWS Identity and Access Management (AWS IAM) · Networking on AWS · Cloud Computing · AWS Management Console · AWS Security.",
      image: require("./assets/images/AWS-Logo.png"), 
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/c8bf18d9ea99e024a05d0f85bc45d134" 
        }
      ]
    },
    {
      title: "ChatGPT for Beginners",
      subtitle: "Completed ChatGPT training from Great Learning Academy, learning prompt engineering and AI fundamentals.",
      image: require("./assets/images/Chatgpt-Logo.png"), 
      imageAlt: "ChatGPT Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.mygreatlearning.com/certificate/AYBUVPCV" 
        }
      ]
    },
    {
      title: "SEO with Squarespace",
      subtitle: "Learned practical SEO strategies using Squarespace via Coursera.",
      image: require("./assets/images/SEO-Logo.png"), 
      imageAlt: "SEO Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/3HLqn2k1VH4QDs4qPrbngPtK5s9KCVmVg2" 
        }
      ]
    },
    {
      title: "Advance Amazon Virtual Assistant",
      subtitle: "Completed Advance Amazon Virtual Assistant at E-Global, Sialkot to understand e-commerce fundamentals.",
      image: require("./assets/images/Amazon-Logo.png"), 
      imageAlt: "Amazon Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1U_ohOl0tCzfFHfjC7jbkgfSuplhYBbgd/view?usp=drive_link" 
        }
      ]
    },
    {
      title: "Microsoft Office Management",
      subtitle: "Gained hands-on skills in Word, Excel, and PowerPoint at English Language Club, Sialkot.",
      image: require("./assets/images/Microsoft365-Logo.png"), 
      imageAlt: "Microsoft Office Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qIoiKctuAkIPM2MCqcMfPXr6wBzpMvbV/view?usp=drive_link" 
        }
      ]
    },
    {
      title: "English Proficiency Certificate",
      subtitle: "Gained hands-on skills in English Proficiency at English Language Club, Sialkot.",
      image: require("./assets/images/ELC-Logo.jpg"), 
      imageAlt: "English Proficiency Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Hebhi4nV_hYZATiav-3qIljwtw1BF-eF/view?usp=sharing" 
        }
      ]
    }, 
    {
      title: "CodeAlpha Internship",
      subtitle: "Contributed to frontend development projects, enhancing user interfaces and improving component functionality.",
      image: require("./assets/images/CodeAlpha_Logo.png"), 
      imageAlt: "CodeAlpha Internship Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1rr_-RoYogjAbo7vA_KDK1euw_uLUrlDl/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "RP9 Internship",
      subtitle: "Conducting comprehensive testing of software applications to ensure quality and functionality.",
      image: require("./assets/images/RP9-Logo.jpg"), 
      imageAlt: "RP9 Internship Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1mOPLM2xakkdNskC3ervadSw4ib4cLJjF/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "Artificial Intelligence for Beginners",
      subtitle: "Skills: Artificial Intelligence (AI) · Machine Learning · Data Analysis · Natural Language Processing (NLP) · Python Programming",
      image: require("./assets/images/Alison-Logo.jpeg"), 
      imageAlt: "Artificial Intelligence for Beginners Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1zht0vyIicN7361u9SNg_WYbJD2dwHXhr/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "ChatGPT for Beginners",
      image: require("./assets/images/GreatLearning-Logo.png"), 
      imageAlt: "ChatGPT for Beginners Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qlNifOQQvUSF0SCb50Zsr02AcoU0HnFA/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "Feature Engineering",
      image: require("./assets/images/GreatLearning-Logo.png"), 
      imageAlt: "Feature Engineering Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1YT7QHOz88d57brjQZMN4v1kgeOYvfX-q/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "Introduction to Cryptography",
      image: require("./assets/images/GreatLearning-Logo.png"), 
      imageAlt: "Introduction to Cryptography Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Uz3cv8tYlZfyICcoPziKNNSiANbhjFUi/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "Master Microsoft 365: Essential Skills and Beyond",
      subtitle: "Skills: Microsoft Word · Microsoft Excel · Microsoft PowerPoint · Microsoft Teams · Microsoft SharePoint",
      image: require("./assets/images/Alison-Logo.jpeg"), 
      imageAlt: "Master Microsoft 365: Essential Skills and Beyond Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1K3kaCv1v42RKsr-8u8dvg1KmxRaJZeqt/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "Programming C#: Fundamentals",
      subtitle: "Skills: C# Programming · Object-Oriented Programming (OOP) · Data Structures · Debugging Techniques",
      image: require("./assets/images/Alison-Logo.jpeg"), 
      imageAlt: "Programming C#: Fundamentals Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1xSR2fi8736PIeRxJkqDib9S6k72haXMV/view?usp=drive_link" 
        }
      ]
    }, 
    {
      title: "Cloud Essentials - Knowledge Badge Readiness Path",
      subtitle: "Skills: Cloud Computing Fundamentals · Cloud Service Models · Cloud Security Best Practices · Cost Management in Cloud Environments · Cloud Architecture Principles",
      image: require("./assets/images/AWS-Logo.png"),
      imageAlt: "Cloud Essentials - Knowledge Badge Readiness Path Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1VnoAtxpjdRHHxT1f-Uj28HAmZPNiaBlb/view?usp=drive_link" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+92 346 0305560",
  email_address: "musamaakhtar63@gmail.com", 
  github: "https://github.com/musamaakhtar-tech/",
  linkedin: "",
  gmail: "",
  facebook: "https://www.facebook.com/musamaakhtar.tech/", 
  twitter: "https://x.com/tech_mua/",  
  instagram: "https://www.instagram.com/mua.tech/", 
  stackoverflow: "https://stackoverflow.com/users/31249735/m-usama-akhtar/", 
  medium: "https://medium.com/@musamaakhtar-tech/", 
  display: true // Set false to hide this section
};

// Twitter Section

const twitterDetails = {
  userName: "https://x.com/tech_mua/", 
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
