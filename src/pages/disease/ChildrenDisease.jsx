import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const ChildrenDisease = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Acne",
    "Addison's Disease in Children",
    "ADHD",
    "Albinism",
    "Allergic Rhinitis",
    "Anemia",
    "Appendicitis",
    "Arrhythmia",
    "Asthma Flare-Ups",
    "Asthma in children",
    "Athlete's Foot",
    "Atrial Septal Defect (ASD)",
    "Autism Spectrum Disorder",
    "Bad breath",
    "Bed-wetting",
    "Bell's Palsy",
    "Blindness",
    "Blisters",
    "Bone Tumors",
    "Botulism",
    "Bronchitis and bronchiolitis",
    "Canker sores (Aphthous Ulcers)",
    "Cardiomyopathy",
    "Celiac Disease",
    "Cellulitis",
    "Cerebral Palsy",
    "Chickenpox",
    "Childhood fears and Anxieties",
    "Chronic Kidney Disease",
    "Cleft Lip and Cleft Palate",
    "Clubfoot",
  ];

  // Sort the diseases alphabetically based on the sortOrder
  const sortedDiseases = diseases.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });

  // Filter the diseases based on the search term
  const filteredDiseases = sortedDiseases.filter((disease) =>
    disease.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-primary text-center mb-3">General Health</h1>
      <p className="text-center text-muted mb-4">
        Keeping kids healthy is a big job! Read up on common conditions and
        illnesses, body basics, caring for children, and much more.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4">
          Abdominal pain, Acne & many more...
        </h3>

        {/* Search Input and Sorting Dropdown */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control me-3"
            placeholder="Search for a disease..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ maxWidth: "150px" }}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <div className="disease-list-container">
          <ul className="list-unstyled custom-scroll">
            {filteredDiseases.length > 0 ? (
              filteredDiseases.map((disease, index) => (
                <li key={index} className="mb-2">
                  <Link
                    state={{ value: index + 1, name: "children" }}
                    to="/acneDisease"
                    className="custom-link">
                    {disease}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-muted">No diseases found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChildrenDisease;
