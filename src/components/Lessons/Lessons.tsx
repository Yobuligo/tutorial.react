import { useState } from "react";
import { lessons } from "../LessonsList";
import { LessonDetails } from "./LessonDetails";
import "./Lessons.css";
import { LessonsOverview } from "./LessonsOverview";

export const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  return (
    <div className="lessons">
      <LessonsOverview
        lessons={lessons}
        onLessonSelected={(selectedLesson) => {
          setSelectedLesson(selectedLesson);
        }}
      />

      <LessonDetails lesson={selectedLesson} />
    </div>
  );
};
