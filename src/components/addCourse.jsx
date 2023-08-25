import { useState } from "react";
import courseFunctions from "./courses";

export default function AddCourse() {
  const addCourse = courseFunctions.courseHandler((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");

  const handleOnSubmit = () => {
    if (!courseTitle.strip() || !courseAuthor.strip()) return alert("Please Add some Data");
    addCourse(
      new courseFunctions.courseClass(courseTitle, courseAuthor),
      Math.ceil(Math.random() * Math.pow(10, 6))
    );
    setCourseTitle("");
    setCourseAuthor("");
  };

  return (
    <>
      <h1>
        <u>My Courses</u>
      </h1>
      <div className="form-container">
        <input
          placeholder="Add course name"
          className="form-input"
          value={courseTitle}
          onChange={(evt) => setCourseTitle(evt.target.value)}
        />
        <input
          placeholder="Add course author"
          className="form-input"
          value={courseAuthor}
          onChange={(evt) => setCourseAuthor(evt.target.value)}
        />
        <button onClick={handleOnSubmit} className="form-submit-btn">
          Add Course
        </button>
      </div>
    </>
  );
}
