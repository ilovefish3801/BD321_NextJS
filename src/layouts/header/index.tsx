import React from "react";
import s from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={s.header}>Header</header>
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/about`}>About</Link>
        </li>
        <li>
          <Link href={`/products`}>Products</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default Header;
