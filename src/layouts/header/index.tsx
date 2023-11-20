import React from "react";
import s from "./header.module.css";
import Link from "next/link";
// redux
import { useSelector } from "react-redux";

const Header = () => {
  const COUNTER = useSelector((state: any) => state.counter.value);
  const CART_ITEMS = useSelector((state: any) => state.cart.items);
  return (
    <>
      <header className={s.header}>Header</header>
      <p>{CART_ITEMS.length > 0 ? CART_ITEMS.length : "Cart is empty"}</p>
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
        <li>
          <Link href={`/news`}>News</Link>
        </li>
        <li>
          <Link href={`/redux`}>Redux</Link>
        </li>
        <li></li>
      </ul>
    </>
  );
};

export default Header;
