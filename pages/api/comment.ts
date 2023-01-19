import type { NextApiRequest, NextApiResponse } from 'next';


const handler = (_: NextApiRequest, res: NextApiResponse) => {
  console.log("api called")
  res.status(200).json({ body: "next13 おもろい" });
};

export default handler;
