import { Link } from "react-router-dom";

const ChildrenExercise = () => {
  return (
    <>
      <div
        className="container-fluid p-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
        }}>
        <h1 className="text-center mt-2 text-bg-primary">
          Choose Your Exercise
        </h1>
        <div
          className="text-center d-flex flex-wrap align-items-center justify-content-center gap-4"
          style={{
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "1rem",
          }}>
          {/* Buttons */}
          <Link
            state={{ value: 1, name: "childEx" }} // Passing the value "2" to HomeRemedies component
            to="/displayExercise"
            className="btn btn-success mb-3">
            Abdominal pain
          </Link>
          <Link
            state={{ value: 2, name: "childEx" }} // Passing the value "2" to HomeRemedies component
            to="/displayExercise"
            className="btn btn-success mb-3">
            Acne
          </Link>
          <Link
            state={{ value: 3, name: "childEx" }} // Passing the value "2" to HomeRemedies component
            to="/displayExercise"
            className="btn btn-success mb-3">
            Allergies
          </Link>
          <Link
            state={{ value: 4, name: "childEx" }} // Passing the value "2" to HomeRemedies component
            to="/displayExercise"
            className="btn btn-success mb-3">
            Athlete's foot
          </Link>
          <Link
            state={{ value: 7, name: "childEx" }} // Passing the value "2" to HomeRemedies component
            to="/displayExercise"
            className="btn btn-success mb-3">
            Ajay Maurya
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChildrenExercise;
