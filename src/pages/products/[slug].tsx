import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// styles
import s from "./single.module.scss";
// module
import { Products } from "@/modules/products";

interface Props {
  data: {
    userId: number,
    id: number,
    title: string,
    body: string
  }  
}

const SingleProduct = ({data}: Props) => {
  //init
  const prod = new Products();
  //states
  const [product, setProduct] = useState<any>(data);
  // router
  const router = useRouter();
  const { slug, id } = router.query;

  // load
  // useEffect(() => {
  //   slug &&
  //     prod.getData(`/posts/${id}`).then((data) => {
  //       setProduct(data);
  //     });
  // }, [slug]);

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.body}</p>
      <div>{product?.price}</div>
    </div>
  );
};

// SSR
export async function getServerSideProps(ctx: any) {
  const prod = new Products()
  const { id } = ctx.query
  const data = await prod.getData(`products/${id}`)
  return { props: {data} }
}

export default SingleProduct;
