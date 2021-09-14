import React from "react";

export default function Extracurricular(props) {
  return (
    <div>
      <div className="flex-item" style={{ marginBottom: "2vw" }}>
        <h1> {props.name} </h1>
        <h4> {props.time}</h4>
        <img src={props.photo} />
        <p className="flexpara">{props.desc}</p>
      </div>
    </div>
  );
}
