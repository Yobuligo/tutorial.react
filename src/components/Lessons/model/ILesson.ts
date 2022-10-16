import React from "react";

export interface ILesson {
  id: string;
  title: string;
  component: React.FC;
}
