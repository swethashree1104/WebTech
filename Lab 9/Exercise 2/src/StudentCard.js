import React from "react";

function StudentCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      width: "250px",
      textAlign: "center",
      boxShadow: "2px 2px 5px gray"
    }}>
      <h3>{props.name}</h3>
      <p><b>Department:</b> {props.department}</p>
      <p><b>Marks:</b> {props.marks}</p>
    </div>
  );
}

export default StudentCard;