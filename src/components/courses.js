import { create } from "zustand";
import { devtools as devTools, persist } from "zustand/middleware";

function course(name, author) {
  this.name = name;
  this.author = author;
  this.status = false;
  this.getDetails = () => `${this.name} by ${this.author}`;
}

const courseStore = (setState) => {
  return {
    courses: new Map(),
    addCourse: (courseData, courseID) => {
      let newMap = new Map().set(courseID, courseData);
      setState((currentState) => ({
        courses:
          currentState.courses.size > 0
            ? new Map([...currentState.courses, ...newMap])
            : new Map([...newMap])
      }));
    },
    removeCourse: (courseID) =>
      setState((currentState) => {
        currentState.courses.delete(courseID);
        return {
          courses: currentState.courses
        };
      }),
    toggleCourse: (courseID, bool) =>
      setState((currentState) => {
        let c = { ...currentState.courses.get(courseID) };
        c.status = bool;
        currentState.courses.set(courseID, c);
        return {
          courses: currentState.courses
        };
      })
  };
};

const useCourseStore = create(
  devTools(
    persist(courseStore, {
      name: "courses"
    })
  )
);

export default {
  courseClass: course,
  courseHandler: useCourseStore
};
