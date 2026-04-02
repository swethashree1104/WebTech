import React from "react";

function StudentProfile() {
  const name = "Swetha";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Profile</h1>
      <p><b>Name:</b> {name}</p>
      <p><b>Department:</b> {department}</p>
      <p><b>Year:</b> {year}</p>
      <p><b>Section:</b> {section}</p>
    </div>
  );
}

export default StudentProfile;