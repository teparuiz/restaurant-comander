import React from "react";

const ButtonComander = (props) => {
  const { name = "" } = props;

  return (
    <div className="container" style={{ padding: "10px", background: "red" }}>
     <a>
     <h1> {name}</h1>
     </a>
    </div>
  );
};

export default ButtonComander;
