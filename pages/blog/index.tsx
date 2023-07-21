import { useState, useEffect } from "react";
import { IBlog } from "@/types/blog";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import { fetcher } from "@/controller/fetcher";

const API_PATH = "http://localhost:3000/api/blog";

// SERVER SIDE
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(API_PATH);
  const data = await res.json();
  return { props: { data } };
};

type Props = { data: IBlog[] };

const index = ({ data }: Props) => {
  return (
    <div>
      {data.map((item: IBlog) => (
        <Link
          href={`/blog/${item.id}`}
          key={item.id}
          className="bg-green-300 w-full mt-4 p-2 flex justify-between"
        >
          <h4>{item.title}</h4>
          <p>{item.likes} likes</p>
        </Link>
      ))}
    </div>
  );
};

export default index;
