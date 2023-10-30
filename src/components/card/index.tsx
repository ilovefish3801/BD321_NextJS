import React from "react";
// import styles
import s from "./card.module.css";
// import "./index.css";

interface Props {
  key: any;
  data: {
    title: string;
    description: string;
  };
}

const card = (props: Props) => {
  const { title, description } = props.data;

  return (
    <>
      <div className={s.card}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default card;
