import React from "react";
import style from "./Input.module.css";

function Input({ type = "text", placeholder = "", value, onChange, label, id }) {
  // 자동완성 속성 설정
  const getAutoComplete = () => {
    if (type === "password") {
      return id === "password" ? "new-password" : "current-password";
    }
    return "on";
  };

  return (
    <div>
      <label htmlFor={id} className={style.inputlable}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style.inputstyle}
        id={id}
        autoComplete={getAutoComplete()}
      />
    </div>
  );
}
export default Input;
