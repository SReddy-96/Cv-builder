import "../styles/output.css";

function Output({ general, education, experience }) {
  return (
    <div id="outputWrapper">
      <div id="general">
        <h1>{general.name}</h1>
        <b id="generalLocation">{general.location}</b>
        <div id="generalInfo">
          {general.email && general.phoneNumber ? (
            <p>
              {general.email} || {general.phoneNumber}
            </p>
          ) : general.email && !general.phoneNumber ? (
            <p>{general.email}</p>
          ) : general.phoneNumber && !general.email ? (
            <p>{general.phoneNumber}</p>
          ) : (
            <p></p>
          )}
        </div>

        <p>{general.summary}</p>
      </div>

      <hr />

      <div id="education">
        <h3>Education</h3>
        {education.map((ed) => (
          <div key={ed.id}>
            <b>{ed.schoolName}</b>
            <p>{ed.study}</p>
            <p>Completed: {ed.date}</p>

            <br />
          </div>
        ))}
      </div>

      <hr />

      <h3>Experience</h3>
      {experience.map((exp) => (
        <div key={exp.id}>
          <b>
            {exp.title} - <i>{exp.location}</i>
          </b>
          <p>{exp.description}</p>
          <p>
            {exp.start} - {exp.end}
          </p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Output;
