import React from "react";
import Link from "next/link";
// interfaces
import { Product } from "@/interfaces";

interface Props {
  data: Product;
}

const Card = ({ data }: Props) => {
  const { title, price, description, id } = data;
  return (
    <>
      <div
        style={{
          padding: 10,
          border: 2,
          borderColor: "#f00",
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{price}</div>
        <Link href={`/products/${id}`}>Детальніше</Link>
      </div>
    </>
  );
};

export default Card;
