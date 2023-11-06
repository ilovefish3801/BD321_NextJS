import React from "react";
import s from "./banner.module.scss";

interface Props {
  title: string;
  description: string;
  reverseProps: any;
}

const banner = ({ title, description, reverseProps }: Props) => {
  return (
    <>
      <h1>Test</h1>
      <div className={s.banner}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button
          onClick={() => {
            reverseProps("test");
          }}
        >
          Buy
        </button>
      </div>
    </>
  );
};

export default banner;
