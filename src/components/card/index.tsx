import React from "react";
// import styles
import s from "./card.module.css";
// import "./index.css";

const card = () => {
  return (
    <>
      <div className={s.card}>
        <h2>title card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut
          expedita dicta sunt asperiores quidem, debitis molestiae, iusto rerum
          tempora natus. Facilis doloremque, repudiandae assumenda corrupti
          suscipit aperiam cupiditate odio.
        </p>
      </div>
    </>
  );
};

export default card;
