import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// styles
import s from "./single.module.scss";
// module
import { Products } from "@/modules/products";

const SingleProduct = () => {
  //init
  const prod = new Products();
  //states
  const [product, setProduct] = useState<any>();
  // router
  const router = useRouter();
  const { slug, id } = router.query;

  // load
  useEffect(() => {
    slug &&
      prod.getData(`/posts/${id}`).then((data) => {
        setProduct(data);
      });
  }, [slug]);

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.body}</p>
    </div>
  );
};

export default SingleProduct;
