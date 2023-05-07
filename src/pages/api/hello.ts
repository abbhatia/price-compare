// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

let coldStart = true;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const isCold = coldStart;
  coldStart = false;
  res
    .status(200)
    .setHeader("x-cold-start", `${isCold}`)
    .json({ name: "John James" });
}
