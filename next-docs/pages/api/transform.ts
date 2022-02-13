import { transform } from '@svgr/core';

const config = require('../../public/transformIcon/.config/svgr.config');
const configDimensions = require('../../public/transformIcon/.config/svgr.config.dimensions');

export default async (req: any, res: any) => {
  const { svgCode, name, dimensions } = req.query;
  const svgrConfig = JSON.parse(dimensions) ? configDimensions : config;
  const jsCode = await transform(svgCode, svgrConfig, {
    componentName: name,
  });
  res.status(200).json({ jsCode });
};
