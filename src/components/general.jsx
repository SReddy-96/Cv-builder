import "../styles/formStyling.css";

function General({ generalData, setGeneralData }) {
  return (
    <>
      <h2>General</h2>
      <div key={generalData.id} className="form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={generalData.name}
            autoComplete="name"
            onChange={(e) =>
              setGeneralData({ ...generalData, name: e.target.value })
            }
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            value={generalData.location}
            name="location"
            onChange={(e) =>
              setGeneralData({ ...generalData, location: e.target.value })
            }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={generalData.email}
            name="email"
            autoComplete="email"
            onChange={(e) =>
              setGeneralData({ ...generalData, email: e.target.value })
            }
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            type="tel"
            value={generalData.phoneNumber}
            name="phoneNumber"
            onChange={(e) =>
              setGeneralData({ ...generalData, phoneNumber: e.target.value })
            }
          />
        </label>
        <label htmlFor="summary">
          Summary:
          <textarea
            type="text"
            value={generalData.summary}
            name="summary"
            onChange={(e) =>
              setGeneralData({ ...generalData, summary: e.target.value })
            }
          />
        </label>
      </div>
      <hr />
    </>
  );
}

export default General;
