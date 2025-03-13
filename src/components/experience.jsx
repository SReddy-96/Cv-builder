import "../styles/formStyling.css";

function Experience({ experienceData, setExperienceData }) {
  const addExperience = () => {
    setExperienceData([
      ...experienceData,
      {
        id: crypto.randomUUID(),
        title: "",
        location: "",
        description: "",
        start: "",
        end: "",
      },
    ]);
  };

  const removeExperience = (id) => {
    setExperienceData(
      experienceData.filter((experience) => experience.id !== id)
    );
  };

  const handleExperienceChange = (index, event) => {
    const updatedExperiences = experienceData.map((experience) =>
      experience.id === index
        ? { ...experience, [event.target.name]: event.target.value }
        : experience
    );
    setExperienceData(updatedExperiences);
  };

  return (
    <>
      <h2>Experience</h2>
      {experienceData.map((experience) => (
        <div key={experience.id} className="form">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              value={experience.title}
              name="title"
              id="title"
              onChange={(e) => handleExperienceChange(experience.id, e)}
            />
          </label>
          <label htmlFor="expLocation">
            Location:
            <input
              type="text"
              value={experience.location}
              name="location"
              id="expLocation"
              onChange={(e) => handleExperienceChange(experience.id, e)}
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              type="text"
              value={experience.description}
              name="description"
              id="description"
              onChange={(e) => handleExperienceChange(experience.id, e)}
            />
          </label>
          <label htmlFor="start">
            Start:
            <input
              type="date"
              value={experience.start}
              name="start"
              id="start"
              onChange={(e) => handleExperienceChange(experience.id, e)}
            />
          </label>
          <label htmlFor="end">
            End:
            <input
              type="date"
              value={experience.end}
              name="end"
              id="end"
              onChange={(e) => handleExperienceChange(experience.id, e)}
            />
          </label>
          <button
            type="button"
            onClick={() => removeExperience(experience.id)}
            className="removeButton"
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addExperience} className="addButton">
        Add Experience
      </button>
    </>
  );
}

export default Experience;
