import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaleDisease = () => {
  const navigate = useNavigate();
  const [selectedDisease, setSelectedDisease] = useState("");

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const selectedValue = e.target.value;

    setSelectedDisease(selectedValue);

    if (selectedValue) {
      navigate("/displayDisease", {
        state: { value: selectedIndex, name: "male" },
      });
    }
  };

  return (
    <>
      <div
        className="container-fluid p-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.9)", // Adding background shadow
        }}>
        <h1 className="text-center mt-4 text-light">Choose Your Disease</h1>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            padding: "2rem",
            gap: "15px",
          }}>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Select Disease"
            value={selectedDisease}
            onChange={handleSelectChange}
            style={{
              minWidth: "300px",
              backgroundColor: "#1e1e2f",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
            }}>
            <option value="">Select a disease...</option>
            {[
              "Abdominal pain",
              "Acne",
              "Allergies",
              "Athlete's foot",
              "Back pain",
              "Bloating",
              "Bruises",
              "Canker sores",
              "Chapped lips",
              "Cold sores (herpes simplex)",
              "Colic",
              "Common Cold",
              "Constipation",
              "Cough",
              "Dandruff",
              "Diarrhea",
              "Dry skin",
              "Ear infections",
              "Eczema (atopic dermatitis)",
              "Gallbladder issues (minor)",
              "Gas",
              "Hay fever",
              "Headaches",
              "Heartburn (acid reflux)",
              "Hemorrhoids",
              "Hives (urticaria)",
              "Indigestion",
              "Insect bites and stings",
              "Irritable bowel syndrome (IBS)",
              "Joint pain",
              "Migraines",
              "Mild arthritis",
              "Mild asthma",
              "Mild dehydration",
              "Mild fever",
              "Mild gastroenteritis",
              "Minor burns",
              "Morning sickness",
              "Mouth ulcers",
              "Muscle aches",
              "Nail fungus",
              "Nausea",
              "Pink eye (conjunctivitis)",
              "Psoriasis",
              "Ringworm (tinea)",
              "Rosacea",
              "Sinusitis",
              "Sore throat",
              "Sunburn",
              "Warts",
            ].map((disease, index) => (
              <option key={index} value={disease}>
                {disease}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default MaleDisease;
