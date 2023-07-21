import { fetcher } from "@/controller/fetcher";
import { IBlog } from "@/types/blog";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let API_PATH = "http://localhost:3000/api/blog";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<IBlog>();
  API_PATH += `/${id}`;

  useEffect(() => {
    const res = fetcher(API_PATH);
    res.then((data) => setData(data));
    console.log(data);
  });
  return (
    <div>
      <h1>This is Blog {id}</h1>
      {data?.title}
    </div>
  );
};

export default BlogDetail;
