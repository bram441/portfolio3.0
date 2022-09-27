/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  //googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Bram",
  logo_name: "",
  nickname: "Brum",
  full_name: "Bram De Coster",
  subTitle:
    "Full stack developer. You can't get there with half work, only with the full 100%.",
  resumeLink: "",
  mail: "mailto:bram.decoster1@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  linkedin: "https://www.linkedin.com/in/bram-de-coster-29a235228/",
  gmail: "bram.decoster1@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications for android and ios",
        "⚡ Creating application backend in Node",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        /*  {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        }, */
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:c#",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hogent",
      subtitle: "Bachelor in Information Technology",
      logo_path: "hogentLogo.png",
      alt_name: "hogent",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Information Technology.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.hogent.be/",
    },
    {
      title: "Sint-Andreas Garenmarkt Brugge",
      subtitle: "Wetenschappen 6uur Wiskunde",
      logo_path: "sabrLogo.png",
      alt_name: "sabrLogo",
      duration: "2018 - 2021",
      descriptions: ["⚡ I have studied science and math"],
      website_link: "https://www.sint-andreas-brugge.be/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Work in Progress",
      subtitle: "Work in Progress",
      logo_path: "workInProgress.png",
      certificate_link: "",
      alt_name: "",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Right now I'm in my final year of my study and I'm going to complete an internship from February till may 2023.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Warehouse worker",
          company: "Overseas",
          company_url: "https://www.overseas.be/",
          logo_path: "overseasLogo.png",
          duration: "Jun 2022 - July 2022",
          location: "Warehouse",
          description: `
          Helping with basic needs in a warehouse.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Helping at a Social Work Organization",
          company: "onshuisbrugge",
          company_url: "https://www.onshuisbrugge.be/",
          logo_path: "onsHuisLogo.png",
          duration: "May 2017 - June 2017",
          location: "At ons huis Brugge",
          description: "Helping with the main staff doing all sorts of stuff",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: `This list of projects contains school projects and personal projects.`,
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Website for my mom",
      url: "",
      description:
        "A website for my mom to use for her work. Currently still in development close to being finished!",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "Student meeting app",
      url: "",
      description:
        "Still very much in early development, can't share much about this project, yet ;).",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      id: "2",
      name: "School project for Fluvius",
      url: "https://github.com/harikanani/node-blockchain",
      description: `Local software program and online website to view and edit dashboards about MVO's and SDG's.`,
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "3",
      name: "School project: Rummikub game",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description: "Rummikub game made in java",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "",
      description: "You are looking at it right now!",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
