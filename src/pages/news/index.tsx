import React, { useEffect, useState } from "react";
import Link from "next/link";
// components
import CardNews from "@/components/cardNews";
// modules
import { News } from "@/modules/news";
const news = () => {
  // init
  const n = new News();
  // states
  const [news, setNews] = useState<any>([]);
  // load
  useEffect(() => {
    n.getData("posts").then((data: any) => {
      setNews(data);
    });
  }, []);
  return (
    <>
      <h2>All News</h2>
      {news.map((item: any) => {
        return <CardNews data={item} key={item.id} />;
      })}
    </>
  );
};

export default news;
