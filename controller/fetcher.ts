import { IBlog } from "@/types/blog";

export const fetcher = async (path: string) => {
  let data;
  try {
    const res = await fetch(path);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};
