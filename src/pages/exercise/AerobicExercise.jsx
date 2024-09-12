import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const AerobicExercise = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Aerobic Classes",
    "Agility Drills Exercise",
    "Aqua Aerobics Exercise",
    "Badminton Exercise",
    "Basketball Exercise",
    "Battle Ropes Exercise",
    "Bear Crawls Exercise",
    "Boxing Exercise",
    "Burpees Exercise",
    "Butt Kicks Exercise",
    "Cardio Kickboxing Exercise",
    "Circuit Training Exercise",
    "Cross-Country Skiing Exercise",
    "Cycling Exercise",
    "Dancing Exercise",
    "Elliptical Trainer Exercise",
    "Fencing Exercise",
    "Handball Exercise",
    "High Knees Exercise",
    "Hiking Exercise",
    "Hula Hooping Exercise",
    "Jump Squats Exercise",
    "Jumping Jacks Exercise",
    "Jumping Rope Exercise",
    "Kickboxing Exercise",
    "Martial Arts Exercise",
    "Mountain Climbers Exercise",
    "Plyometric Exercises",
    "Power Walking Exercise",
    "Racquetball Exercise",
    "Rowing Exercise",
    "Rowing in Water Exercise",
    "Rowing Machine Exercise",
    "Running Exercise",
    "Ski Ergometer Exercise",
    "Skipping (Jump Rope) Exercise - Copy",
    "Skipping (Jump Rope) Exercise",
    "Soccer Exercise",
    "Stair Climbing Exercise",
    "Step Aerobics Exercise",
    "Swimming Exercise",
    "Tabata Workouts",
    "Tae Bo Exercise",
    "Tennis Exercise",
    "Trampoline Workouts",
    "Treadmill Running Exercise",
    "Volleyball Exercise",
    "Walking Exercise",
    "Water Polo Exercise",
    "Zumba Exercise",
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
                    state={{ value: index + 1, name: "aerobic" }}
                    to="/displayExercise"
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

export default AerobicExercise;
