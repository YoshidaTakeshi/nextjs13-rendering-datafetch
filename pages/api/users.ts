import type { NextApiRequest, NextApiResponse } from 'next';
import { USERS } from '../../constants/user';

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.status(200).json(USERS);
};

export default handler;
