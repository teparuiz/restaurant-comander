import React from "react";

const ButtonComander = (props) => {
  const { name = "", onClick, icon = "" } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="container"
      style={{ padding: "30px", background: "gray" }}
    >
      <div className="container align-items-center">
        {name}
        <i className="material-icons">{icon}</i>
      </div>
    </button>
  );
};

export default ButtonComander;
