import type { NextApiRequest, NextApiResponse } from 'next';
import { USERS } from '../../constants/user';

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(USERS[0]);
};

export default handler;
