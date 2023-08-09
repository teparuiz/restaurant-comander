import React from "react";
import style from '@teparuiz69/styles/button.module.css'
export const Button = (props) => {
  const { name = "", onClick } = props;

  return (
    <div className={style.button}>
      <button onClick={onClick}> {name}</button>
    </div>
  );
};
