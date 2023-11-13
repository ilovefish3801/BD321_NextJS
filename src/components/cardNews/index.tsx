import React from "react";
import Link from "next/link";
import s from "./cardNews.module.scss";

interface Props {
  data: any;
}

const CardNews = ({ data }: Props) => {
  return (
    <>
      <div className={s.card}>
        <h4>{data?.title}</h4>
        <p>{data?.body}</p>
        <Link href={`/news/${data?.title}?id=${data.id}`}>More</Link>
      </div>
    </>
  );
};

export default CardNews;
