import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// module
import { News } from "@/modules/news";

const SingleNews = () => {
  //init
  const n = new News();
  const router = useRouter();
  const { title, id } = router.query;
  // states
  const [news, setNews] = useState<any>();
  // load
  useEffect(() => {
    n.getData(`posts/${id}`).then((data: any) => {
      setNews(data);
    });
  }, []);
  return (
    <div>
      <h2>{news?.title}</h2>
      <p>{news?.body}</p>
    </div>
  );
};

export default SingleNews;
