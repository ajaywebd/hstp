import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const MaleDisease = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Abdominal pain",
    "Acne",
    "Allergies",
    "Anxiety",
    "Athlete's foot",
    "Back pain",
    "Bacterial vaginosis",
    "Bad breath (halitosis)",
    "Blisters",
    "Bloating",
    "Body odor",
    "Brittle nails",
    "Bruises",
    "Canker sores",
    "Cellulite",
    "Chafing",
    "Chapped lips",
    "Chronic fatigue syndrome (CFS)",
    "Cold sores (herpes simplex)",
    "Colic",
    "Common Cold",
    "Concentration issues",
    "Constipation",
    "Cough",
    "Dandruff",
    "Dark circles under eyes",
    "Diarrhea",
    "Dry eyes",
    "Dry skin",
    "Dull hair",
    "Ear infections",
    "Eczema (atopic dermatitis)",
    "Excessive sweating",
    "Eyelid swelling",
    "Fatigue",
    "Fibromyalgia",
    "Gallbladder issues (minor)",
    "Gas",
    "Gum disease (gingivitis)",
    "Hair loss (non-severe)",
    "Hangnails",
    "Hay fever",
    "Headaches",
    "Heartburn (acid reflux)",
    "Hemorrhoids",
    "Hives (urticaria)",
    "Hot flashes",
    "Indigestion",
    "Insect bites and stings",
    "Insomnia",
    "Irritable bowel syndrome (IBS)",
    "Itchy skin",
    "Jet lag",
    "Joint pain",
    "Leg cramps",
    "Low energy",
    "Memory problems",
    "Menstrual cramps",
    "Migraines",
    "Mild anemia",
    "Mild arthritis",
    "Mild asthma",
    "Mild dehydration",
    "Mild depression",
    "Mild fever",
    "Mild gastroenteritis",
    "Minor burns",
    "Minor cuts and scrapes",
    "Minor sleep disorders",
    "Morning sickness",
    "Motion sickness",
    "Mouth ulcers",
    "Muscle aches",
    "Nail fungus",
    "Nausea",
    "Night sweats",
    "Nosebleeds",
    "Pink eye (conjunctivitis)",
    "Poor circulation",
    "Premenstrual syndrome (PMS)",
    "Psoriasis",
    "Puffy eyes",
    "Restless legs syndrome",
    "Ringworm (tinea)",
    "Rosacea",
    "Scars",
    "Sinusitis",
    "Sore eyes",
    "Sore throat",
    "Split ends",
    "Stress",
    "Stretch marks",
    "Sunburn",
    "Swimmer's ear",
    "Toothache",
    "Urinary tract infections (UTIs)",
    "Vaginal dryness",
    "Varicose veins",
    "Warts",
    "Yeast infections (candidiasis)",
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
                    state={{ value: index + 1, name: "female" }}
                    to="/displayDisease"
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

export default MaleDisease;
