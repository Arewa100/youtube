import React from "react";
// import styles from '../styles/linkButton.css'

function LinkButton({text , url }) {
  const handleClick = () => {
    window.location.href = url ;
  };
  return (
    <button onClick={handleClick} > {text}</button>
);
}
export default LinkButton;

