import { useState, useEffect } from "react";
import { Name } from "@/types/name";
import type { GetServerSideProps } from "next";

const API_PATH = "http://localhost:3000/api/hello";

// SERVER SIDE
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(API_PATH);
  const data = await res.json();
  return { props: { data } };
};

export default function Home({ data }: { data: Name }) {
  // const [data, setData] = useState<Name>();
  // const [isLoading, setLoading] = useState(false);

  // CLIENT SIDE
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(API_PATH)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  return (
    <div className="container text-center p-10 mx-auto">
      <h1>Home</h1>
      <h1>{data.name}</h1>
    </div>
  );
}
