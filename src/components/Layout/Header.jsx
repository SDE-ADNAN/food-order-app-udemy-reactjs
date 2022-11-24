import React from "react";
import { mealsJPG } from "../../assets";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button onClick={props.onShowCart}>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsJPG} alt="meals"></img>
      </div>
    </>
  );
};

export default Header;
