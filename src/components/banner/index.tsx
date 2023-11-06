import React from "react";
import s from "./banner.module.css";

const banner = () => {
  return (
    <>
      <div className={s.banner}>
        <h1>Test Banner</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          cupiditate soluta deserunt dolorum ab, aliquid quisquam vero esse
          numquam enim maiores? Laudantium cum vel culpa perferendis cupiditate,
          quo esse labore.
        </p>
      </div>
    </>
  );
};

export default banner;
