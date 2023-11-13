import React, { useEffect, useState } from "react";
// styles
import s from "./products.module.scss";
// interface
import { Product } from "@/interfaces";
// components
import Card from "@/components/productCard";
// modules
import { Products as Prod } from "@/modules/products";

const getAllProducts = async () => {
  return await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

const Products = () => {
  // init
  const prod = new Prod();
  // states
  const [products, setProducts] = useState<Product[] | null>(null);
  // load
  useEffect(() => {
    // getAllProducts().then((data: Product[]) => setProducts(data));
    prod.getData("posts").then((data: Product[]) => setProducts(data));
  }, []);
  return (
    <>
      <div className={s.products}>Products</div>
      {products ? (
        products.map((product: Product) => {
          return <Card key={product.id} data={product} />;
        })
      ) : (
        <div>Products Loading....</div>
      )}
    </>
  );
};

export default Products;
