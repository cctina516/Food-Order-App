import React from "react";
import classese from "./Card.module.css";

const Card = (props) => {
  return <div className={classese.card}>{props.children}</div>;
};

export default Card;
