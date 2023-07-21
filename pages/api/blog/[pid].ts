import type { NextApiRequest, NextApiResponse } from "next";
import { IBlog } from "@/types/blog";

const data = [
  {
    id: 1,
    title: "Getting Started with TypeScript",
    author: "John Doe",
    date: "2023-07-01",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["TypeScript", "Programming", "Beginner"],
    views: 1256,
    likes: 87,
  },
  {
    id: 2,
    title: "Advanced React Techniques",
    author: "Jane Smith",
    date: "2023-06-15",
    content:
      "In this blog post, we will explore some advanced React techniques...",
    tags: ["React", "JavaScript", "Frontend", "Advanced"],
    views: 2367,
    likes: 135,
  },
  {
    id: 3,
    title: "Data Visualization with D3.js",
    author: "Alex Johnson",
    date: "2023-06-30",
    content:
      "Learn how to create stunning data visualizations using D3.js library...",
    tags: ["D3.js", "Data Visualization", "Web Development"],
    views: 1965,
    likes: 92,
  },
  {
    id: 4,
    title: "Introduction to GraphQL",
    author: "Sarah Adams",
    date: "2023-05-20",
    content:
      "GraphQL is a powerful query language for APIs. Let's get started...",
    tags: ["GraphQL", "API", "Backend", "Web Services"],
    views: 3023,
    likes: 204,
  },
  {
    id: 5,
    title: "Python for Data Science",
    author: "Michael Lee",
    date: "2023-04-10",
    content:
      "Discover how Python can be used for data analysis and machine learning...",
    tags: ["Python", "Data Science", "Machine Learning"],
    views: 4125,
    likes: 322,
  },
  {
    id: 6,
    title: "The Power of CSS Grid Layout",
    author: "Emily Brown",
    date: "2023-07-10",
    content:
      "CSS Grid Layout is a game-changer for web layout design. Let's explore...",
    tags: ["CSS", "Layout", "Web Design"],
    views: 1834,
    likes: 105,
  },
  {
    id: 7,
    title: "Introduction to Node.js",
    author: "David Wilson",
    date: "2023-06-01",
    content:
      "Node.js is a popular JavaScript runtime. Learn the basics here...",
    tags: ["Node.js", "JavaScript", "Backend"],
    views: 2789,
    likes: 163,
  },
  {
    id: 8,
    title: "Best Practices for Mobile App Development",
    author: "Sophia Liu",
    date: "2023-07-05",
    content:
      "Discover the best practices for developing high-quality mobile apps...",
    tags: ["Mobile App", "Development", "Best Practices"],
    views: 2576,
    likes: 201,
  },
  {
    id: 9,
    title: "Secure Coding in Java",
    author: "William Clark",
    date: "2023-05-12",
    content:
      "Learn how to write secure Java code and prevent common vulnerabilities...",
    tags: ["Java", "Secure Coding", "Programming"],
    views: 2154,
    likes: 118,
  },
  {
    id: 10,
    title: "Introduction to Cloud Computing",
    author: "Jessica Martinez",
    date: "2023-04-25",
    content:
      "Understand the basics of cloud computing and its benefits for businesses...",
    tags: ["Cloud Computing", "Technology", "Business"],
    views: 3167,
    likes: 189,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBlog>
) {
  const { pid } = req.query;
  const dataById = data[parseInt(pid as string) - 1];
  res.status(200).json(dataById);
}
