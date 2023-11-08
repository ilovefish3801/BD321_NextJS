import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// styles
import s from "./single.module.scss";

const getProduct = async (id: any) => {
  return await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

const SingleProduct = () => {
  //states
  const [product, setProduct] = useState<any>();
  // router
  const router = useRouter();
  const { id } = router.query;

  // load
  useEffect(() => {
    id &&
      getProduct(id).then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div>
      SingleProduct: {id}
      <div>{product?.title}</div>
    </div>
  );
};

export default SingleProduct;
