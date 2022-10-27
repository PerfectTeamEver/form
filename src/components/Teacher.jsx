import React from "react";
import teacherImg from "../assets/teacher.jpg";

const Teacher = () => {
  return (
    <div className="teacher text">
      <div className="teacher_info">
        <h1>Bobomurod XAMDAMOV</h1>
        <h4>Matematika o'qituvchisi</h4>
      </div>
      <div className="teacher_img">
        <img src={teacherImg} alt="" />
      </div>
    </div>
  );
};

export default Teacher;
