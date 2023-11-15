import React, { useEffect } from "react";
import s from "./footer.module.css";
import { useDispatch } from "react-redux";
import { addDataFromLS } from "@/store/features/cart";
const Footer = () => {
  // init
  const dispatch = useDispatch();
  // setting redux
  useEffect(() => {
    // get data fro ls
    const CART_ITEMS = localStorage.getItem("cart");
    CART_ITEMS && CART_ITEMS.length > 0
      ? dispatch(addDataFromLS(JSON.parse(CART_ITEMS)))
      : null;
  });
  return (
    <>
      <footer className={s.footer}>Footer</footer>
    </>
  );
};

export default Footer;
