// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Name } from "@/types/name";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Name>
) {
  res.status(200).json({ name: "John Dee" });
}
