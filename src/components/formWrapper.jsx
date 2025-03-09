import General from "./general.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import "../styles/formWrapper.css";

function FormWrapper({
  generalData,
  setGeneralData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
}) {
  return (
    <div className="formWrapper">
      <General generalData={generalData} setGeneralData={setGeneralData} />
      <Education
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <Experience
        experienceData={experienceData}
        setExperienceData={setExperienceData}
      />
    </div>
  );
}

export default FormWrapper;
