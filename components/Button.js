import React from "react";
import style from "@teparuiz69/styles/button.module.css";
export const Button = (props) => {
  const { name = "", onClick, className = "", icon = "" } = props;

  return (
    <div className={style.button}>
      <button onClick={onClick} className={className}>
        <div className="d-flex align-items-center">
          {name} {icon ? <i className="material-icons"> {icon}</i> : null}
        </div>
      </button>
    </div>
  );
};
