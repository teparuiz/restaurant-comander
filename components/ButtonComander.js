import React from "react";

const ButtonComander = (props) => {
  const { name = "", onClick, icon = "" } = props;

  return (
    <div
      className="container align-items-center"
      style={{ padding: "30px", background: "red" }}
    >
      <button type="button" onClick={onClick}>
        <div className="align-items-center">
          {name}
          <i className="material-icons">{icon}</i>
        </div>
      </button>
    </div>
  );
};

export default ButtonComander;
