import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    springboot,
    java,
    python,
    sql,
    thymleaf,
    cloud,
    eclipse,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    mulesoft,
    salesforce,
    katalon,
    meta,
    vts,
    starbucks,
    tesla,
    shopify,
    healthcare,
    jobit,
    tripguide,
    threejs,
    vscode,
    postman,
    task,
    travel,
    abdul,
    vajpayee,
    patel
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer(Springboot)",
      icon: web,
    },
    {
      title: "SQL Programmer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Springboot",
      icon: springboot,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Thymleaf",
      icon: thymleaf,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Vs Code",
      icon: vscode,
    },
    {
      name: "PostMan",
      icon: postman,
    },
    {
      name: "Cloud",
      icon: cloud,
    },
    {
      name: "Eclipse IDE",
      icon: eclipse,
    },
  ];
  
  const experiences = [
    {
      title: "Mulesoft Dev 1",
      company_name: "Mulesoft",
      icon: mulesoft,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Getting Started With Any Point Platform.",
        "Anypoint Platform Core Components.",
        "Robust API Building & Deployment.",
        "Building Mule Applications With Any Point Studio,Web Service Integration & Data Management.",
      ],
    },
    {
      title: "Salesforce Dev Intern",
      company_name: "Salesforce",
      icon: salesforce,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Dec 2023",
      points: [
        "Completed various Trailhead modules, demonstrating a deep understanding of Salesforce development.",
        "Earned the Apex Specialist Super Badge, showcasing expertise in Apex programming and ability to develop custom applications.",
        "Achieved the Process Automation Specialist Super Badge, highlighting skills in automating business processes using Salesforce tools.",
        "Earned the Developer Super Set Super Badge, demonstrating comprehensive knowledge and skills in Salesforce development, including Apex, Visualforce, and Lightning components.",
      ],
    },
    {
      title: "Automation Testing Intern",
      company_name: "Katalon",
      icon: katalon,
      iconBg: "#383E56",
      date: "Dec 2023 - Feb 2024",
      points: [
        "Developed comprehensive skills in software testing automation, gaining invaluable hands-on experience.",
        "Worked with industry-leading tools and technologies, staying up-to-date with the latest advancements.",
        "Established a strong foundation for a successful career in software testing automation, poised to leverage newfound knowledge",
      ],
    },
    {
      title: "Software Devepoment Engineer",
      company_name: "VTS Ent. Pvt LTD",
      icon: vts,
      iconBg: "#ffffff",
      date: "Jul 2024 - Mar 2025",
      points: [
        "Developing and maintaining web applications using Java Spring boot Framework and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Man needs difficulties in life because they are necessary to enjoy success.",
      name: "A.P.J Kalam",
      designation: "The Rocket MAN",
      company: "INDIA",
      image: abdul,
    },
    {
      testimonial:
        "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
      name: "Vajpayee",
      designation: "Former PM",
      company: "INDIA",
      image: vajpayee,
    },
    {
      testimonial:
        "The negligence of a few small things could easily lead to the suffering of many.",
      name: "Sardar Patel",
      designation: "The IRON Man",
      company: "INDIA",
      image: patel,
    },
  ];
  
  const projects = [
    {
      name: "Health-Care",
      description:
        "This healthcare appointment scheduling system offers numerous benefits, including streamlined scheduling and communication.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "thymleaf",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: healthcare,
      source_code_link: "https://github.com/AdityaMishra2003/Smart_Healthcare_Management.git",
    },
    {
      name: "Task Management",
      description:
        "This task management project enables managers to create and assign tasks, track status, and monitor progress.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: task,
      source_code_link: "https://github.com/AdityaMishra2003/Task_Management.git",
    },
    {
      name: "Travel Agency",
      description:
        "A comprehensive travel booking platform that allows users to book travel tickets, and offers seamless booking experience.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/AdityaMishra2003/Ticket_Booking_Website.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
