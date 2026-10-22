import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills"; 
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import TeacherPersonalAssistant from "./pages/TeacherPersonalAssistant";
import profileImg from "../assets/profile.png";
  

const Home = () => {
  // dark mode (optional – future ready)
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      style={{
        background: isDark ? "#020617" : "#f8fafc",
        color: isDark ? "#ffffff" : "#020617",
        transition: "0.3s",
      }}
    >
      {/* ================= NAVBAR ================= */}
<NavBar
  brand="Priya Portfolio"
  links={[
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]}
  ctaText="Hire Me"
/>


      {/* ================= HERO ================= */}
      
      <Hero
  name="Priya yadav"
  role="Teacher | Educator | Mentor"
  description="Passionate teacher with a strong commitment to student success, innovative teaching methods, and a positive learning environment."
  profileImage={profileImg}
/>
      {/* ================= ABOUT ================= */}
      <About
  heading="About Me"
  description1="I am a dedicated and passionate teacher focused on student-centered learning and academic growth."
  description2="My teaching approach combines concept clarity, real-life examples, and continuous assessment to ensure effective learning."
  stats={[
    { count: "2+", label: "Years Experience" },
    { count: "100+", label: "Students Taught" },
    { count: "5+", label: "Subjects" },
    { count: "10+", label: "Certifications" },
  ]}
/>

      {/* ================= EDUCATION ================= */}
      <Education
  heading="My Education"
  subheading="Academic background that built my teaching foundation"
  educationList={[
    {
      degree: "Bachelor of Education",
      institution: "XYZ University",
      duration: "2020 – 2022",
    },
    {
      degree: "Bachelor’s Degree",
      institution: "ABC College",
      duration: "2017 – 2020",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "UP Board",
      duration: "2016 – 2017",
    },
  ]}
/>

      {/* ================= SKILLS ================= */}
      <Skills
  heading="My Skills"
  subheading="A blend of teaching expertise, communication strength, and modern digital tools."
  skillBlocks={[
    {
      title: "Teaching & Classroom Skills",
      description:
        "Strong classroom control with focus on clarity and engagement.",
      points: [
        "Lesson Planning",
        "Classroom Management",
        "Student Assessment",
        "Doubt Solving",
      ],
    },
    {
      title: "Communication & Mentorship",
      description:
        "Clear communication with students and parents to ensure growth.",
      points: [
        "Clear Explanation",
        "Public Speaking",
        "Student Motivation",
        "Parent Interaction",
      ],
    },
    {
      title: "Digital & Professional Tools",
      description:
        "Comfortable with digital platforms for modern learning.",
      points: [
        "Online Teaching Platforms",
        "Smart Board Usage",
        "Google Classroom",
        "MS Word / PPT",
      ],
    },
  ]}
/>

      {/* ================= EXPERIENCE ================= */}
      <Experience
  stats={[
    { number: "4+", title: "Years Teaching" },
    { number: "150+", title: "Students Mentored" },
    { number: "6–12", title: "Classes Handled" },
  ]}
  roles={[
    {
      title: "Senior Subject Teacher",
      organization: "ABC Public School",
      duration: "2022 – Present",
      description:
        "Led classroom instruction with a focus on conceptual clarity and exam-oriented preparation.",
      points: [
        "Structured lesson planning",
        "Weekly assessments",
        "Board exam preparation",
        "Parent coordination",
      ],
    },
    {
      title: "Private Tutor (Home & Online)",
      organization: "Self-Employed",
      duration: "2020 – 2022",
      description:
        "Delivered personalized one-to-one teaching focusing on weak areas and confidence building.",
      points: [
        "Personalized study plans",
        "Doubt-focused sessions",
        "Online teaching tools",
        "Progress tracking",
      ],
    },
  ]}
  philosophyTitle="Teaching Philosophy"
  philosophyText="I believe effective teaching comes from clarity, consistency, and connection. Learning should feel achievable and motivating."
/>

      {/* ================= CONTACT ================= */}
      {/* <Contact /> */}
      <Contact  
  title="Get In Touch"
  subtitle="Let’s talk about your project"
  slug=""
  phone="+919745673846"
  whatsapp="919876543210"
  location="Lucknow, Uttar Pradesh"
  availability="Available for <b>Internships</b> & <b>Frontend Roles</b>"
/>


      {/* ================= FOOTER ================= */}
      <Footer
  brandName="PriyaPortfolio"
  ownerName="Priya yadav"
  description="A professional teaching portfolio focused on education, concept clarity, and student success."
  location="Lucknow, Uttar Pradesh"
  phone="+919876543210"
  email="priyayadav@email.com"
/>
      {/* =============PersonalAssistant=================== */}
  <TeacherPersonalAssistant
  teacherName="Priya yadav"
  subject="Mathematics"
  experience="6+ years"
  classes="6th – 12th"
  school="ABC Public School"
  location="Lucknow, Uttar Pradesh"
  demoAvailable={true}/>
</div>
  );
};

export default Home;

