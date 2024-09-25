import React from "react";
import { Link, useLocation } from "react-router-dom";
import Children_Disease from "../../data/Children_Disease";

import "./DisplayDisease.css"; // Import the updated CSS file

const AcneDisease = () => {
  const location = useLocation();
  const { value, name } = location.state || {}; // Retrieve the passed value

  // Finding the selected data by the passed value (ID)
  let selectedData = Children_Disease.find((disease) => disease.id === value);

  return (
    <div className="container disease-container">
      {selectedData ? (
        <>
          <div className="row">
            <div className="col-md-12">
              <h1 className="disease-title">{selectedData.title}</h1>
              <p className="disease-definition">{selectedData.definition}</p>
            </div>
          </div>

          {/* Displaying Prevalence */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">Prevalence:</h2>
              <p>
                <strong>Affected Population:</strong>{" "}
                {selectedData.prevalence.affected_population}
              </p>
              <p>
                <strong>Onset:</strong> {selectedData.prevalence.onset}
              </p>
            </div>
          </div>

          {/* Displaying Development */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">
                {selectedData.development.heading}
              </h2>
              <p>
                <strong>Cause:</strong> {selectedData.development.cause}
              </p>
              <h3>Progression:</h3>
              <ul>
                {selectedData.development.progression.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <p>
                <strong>Types:</strong>{" "}
                {selectedData.development.types.join(", ")}
              </p>
            </div>
          </div>

          {/* Displaying Causes */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">{selectedData.causes.heading}</h2>
              <ul>
                {selectedData.causes.list.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Displaying Symptoms */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">{selectedData.symptoms.heading}</h2>
              <p>
                <strong>Affected Areas:</strong>{" "}
                {selectedData.symptoms.affected_areas.join(", ")}
              </p>
              <h3>Common Symptoms:</h3>
              <ul>
                {selectedData.symptoms.common_symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
              <p>{selectedData.symptoms.note}</p>
            </div>
          </div>

          {/* Displaying Treatment */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">
                {selectedData.treatment.heading}
              </h2>
              <p>
                <strong>Goal:</strong> {selectedData.treatment.goal}
              </p>
              <h3>Factors for Determining Treatment:</h3>
              <ul>
                {selectedData.treatment.factors_for_determining_treatment.map(
                  (factor, index) => (
                    <li key={index}>{factor}</li>
                  )
                )}
              </ul>

              <h3>Types of Treatment:</h3>

              <div>
                <h4>Topical Medications:</h4>
                <p>
                  {
                    selectedData.treatment.types_of_treatment
                      .topical_medications.description
                  }
                </p>
                <ul>
                  {selectedData.treatment.types_of_treatment.topical_medications.medications.map(
                    (medication, index) => (
                      <li key={index}>
                        <strong>{medication.name}:</strong>{" "}
                        {medication.function}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4>Systemic Medications:</h4>
                <p>
                  {
                    selectedData.treatment.types_of_treatment
                      .systemic_medications.description
                  }
                </p>
                <ul>
                  {selectedData.treatment.types_of_treatment.systemic_medications.medications.map(
                    (medication, index) => (
                      <li key={index}>{medication}</li>
                    )
                  )}
                </ul>
              </div>

              {selectedData.treatment.types_of_treatment.severe_cases && (
                <div>
                  <h4>Severe Cases - Isotretinoin:</h4>
                  <p>
                    <strong>Function:</strong>{" "}
                    {
                      selectedData.treatment.types_of_treatment.severe_cases
                        .medication.function
                    }
                  </p>
                  <p>
                    <strong>Success Rate:</strong>{" "}
                    {
                      selectedData.treatment.types_of_treatment.severe_cases
                        .medication.success_rate
                    }
                  </p>
                  <p>
                    <strong>Side Effects:</strong>{" "}
                    {
                      selectedData.treatment.types_of_treatment.severe_cases
                        .medication.side_effects
                    }
                  </p>
                  <p>
                    <strong>Warning:</strong>{" "}
                    {
                      selectedData.treatment.types_of_treatment.severe_cases
                        .medication.warning
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Back Button */}
          <div className="row mt-4">
            <div className="col text-center">
              <Link to={`/disease/${name}Disease`} className="btn btn-success">
                Back to All Diseases
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p>No data found for the selected ID.</p>
      )}
    </div>
  );
};

export default AcneDisease;
