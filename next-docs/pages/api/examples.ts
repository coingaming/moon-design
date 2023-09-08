import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import getFilesFromDirectory from '../../utils/getFilesFromDirectory';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<{ examples: Object }>
) => {
  const { component } = req.query;
  const dirPath = path.resolve('./public', 'examples', component as string);
  const examples = await getFilesFromDirectory(dirPath);
  res.status(200).json({ examples });
};
