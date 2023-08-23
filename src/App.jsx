import "./styles.css";
import AddCourse from "./components/addCourse";
import ShowCourses from "./components/showCourses";

export default function App() {
  return (
    <div className="main-container">
      <AddCourse />
      <ShowCourses />
    </div>
  );
}
