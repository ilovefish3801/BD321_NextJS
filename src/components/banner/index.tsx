import React from "react";
import s from "./banner.module.css";

interface Props {
  title: string;
  description: string;
}

const banner = ({ title, description }: Props) => {
  return (
    <>
      <div className={s.banner}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default banner;
