import "../styles/formStyling.css";

function Education({ educationData, setEducationData }) {
  const addEducation = () => {
    setEducationData([
      ...educationData,
      {
        id: crypto.randomUUID(),
        schoolName: "",
        study: "",
        date: "",
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducationData(educationData.filter((education) => education.id !== id));
  };

  const handleEducationChange = (index, event) => {
    const updatedEducations = educationData.map((education) =>
      education.id === index
        ? { ...education, [event.target.name]: event.target.value }
        : education
    );
    setEducationData(updatedEducations);
  };

  return (
    <>
      <h2>Education</h2>
      {educationData.map((education) => (
        <div key={education.id} className="form">
          <label htmlFor="schoolName">
            School Name:
            <input
              type="text"
              value={education.schoolName}
              name="schoolName"
              id="schoolName"
              onChange={(e) => handleEducationChange(education.id, e)}
            />
          </label>
          <label htmlFor="study">
            Study:
            <input
              type="text"
              value={education.study}
              name="study"
              id="study"
              onChange={(e) => handleEducationChange(education.id, e)}
            />
          </label>
          <label htmlFor="date">
            Date Completed:
            <input
              type="date"
              value={education.date}
              name="date"
              id="date"
              onChange={(e) => handleEducationChange(education.id, e)}
            />
          </label>
          <button type="button" onClick={() => removeEducation(education.id)} className="removeButton">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEducation} className="addButton">
        Add Education
      </button>

      <hr/>
    </>
  );
}

export default Education;
