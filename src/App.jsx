import "./styles/App.css";
import FormWrapper from "./components/formWrapper.jsx";
import Output from "./components/output.jsx";
import { useState } from "react";
import Header from "./components/header.jsx";

function App() {
  const [general, setGeneral] = useState({
    id: crypto.randomUUID(),
    name: "Steven Reddy",
    location: "Reefton, New Zealand",
    email: "steveng.reddy@gmail.com",
    phoneNumber: "123456789",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, amet a quam eaque, asperiores numquam provident iure dolorem vitae aspernatur deserunt! Sed deleniti vitae enim aspernatur temporibus repudiandae ex nobis!",
  });
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "The Odin Project",
      study: "Full Stack JavaScript",
      date: "2025",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      title: "Developer",
      location: "Self Employed",
      description: "Providing sites and solutions to all types of customers",
      start: "2024",
      end: "2025",
    },
  ]);

  return (
    <>
      <Header />
      <div className="main">
        <FormWrapper
          generalData={general}
          setGeneralData={setGeneral}
          educationData={education}
          setEducationData={setEducation}
          experienceData={experience}
          setExperienceData={setExperience}
        />
        <Output
          general={general}
          education={education}
          experience={experience}
        />
      </div>
    </>
  );
}

export default App;
