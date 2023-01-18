import type { NextApiRequest, NextApiResponse } from 'next';
import { POSTS } from '../../constants/post';

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  res.status(200).json(POSTS);
};

export default handler;
