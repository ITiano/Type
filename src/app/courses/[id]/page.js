import React from "react";
import CourseContainer from "@components/pages/course/CourseContainer";
import DATA from "db";

const CourseInfo = () =>  <CourseContainer data={DATA[0]} />;

export default CourseInfo;
