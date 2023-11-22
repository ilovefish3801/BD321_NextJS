import React, { useEffect, useState } from "react";
// styles
import s from "./products.module.scss";
// interface
import { Product } from "@/interfaces";
// components
import Card from "@/components/productCard";
// modules
import { Products as Prod } from "@/modules/products";
import { deleteItemsFromCart } from "@/store/features/cart";
import { useDispatch } from "react-redux";

const getAllProducts = async () => {
  return await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

interface Props{
  prods: Product[]
}

const Products = ({prods}: Props) => {
  // init
  const prod = new Prod();
  const dispatch = useDispatch()
  // states
  const [products, setProducts] = useState<Product[] | null>(prods);
  
  // load
  useEffect(() => {
    // getAllProducts().then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <>
      <div className={s.products}>Products</div>
      <div className={s.deleteAll_btn} onClick={()=>{
        dispatch(deleteItemsFromCart())
      }}>Очистити корзину</div>
      <div>
        {products ? (
          products.map((product: Product) => {
            return <Card key={product.id} data={product} />;
          })
        ) : (
          <div>Products Loading....</div>
        )}
      </div>
    </>
  );
};

// SSR
export async function getServerSideProps() {
  // Fetch data from external API
  const prod = new Prod();
  const data = await prod.getData("posts");
 
  // Pass data to the page via props
  return { props: { prods: data } }
}

export default Products;
