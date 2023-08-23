import React from "react";
import courseFunctions from "./courses";

export default function ShowCourses() {
  const { courses, removeCourse, toggleCourse } = courseFunctions.courseHandler(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourse: state.toggleCourse
    })
  );
  const getCourses = () => {
    if (courses.size === undefined) return;
    return (
      <ul>
        {Array.from(courses.keys(), (elm) => (
          <li className="course-item">
            <input
              type="checkbox"
              checked={courses.get(elm).status}
              onChange={(evt) => toggleCourse(elm, evt.target.checked)}
            />
            {courses.get(elm).status ? (
              <s>{courses.get(elm).getDetails()}</s>
            ) : (
              courses.get(elm).getDetails()
            )}
            <button className="delete-btn" onClick={() => removeCourse(elm)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  return <div className="course-item-col-1">{getCourses()}</div>;
}
