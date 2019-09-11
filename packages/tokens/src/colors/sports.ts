import { palette } from './palette';
import { Color } from './types';

const { krillin, cell, dodoria, vegeta, raditz, nappa, frieza, whis } = palette;

export const sportColors: { [key: string]: Color } = {
  rugby: krillin[100],
  horseRacing: cell[100],
  americanFootBall: krillin[100],
  footBall: dodoria[100],
  ski: vegeta[100],
  badminton: vegeta[100],
  golf: raditz[100],
  snooker: raditz[100],
  baseBall: nappa[100],
  handBall: frieza[100],
  basketBall: raditz[100],
  iceHockey: vegeta[100],
  special: cell[100],
  biathlon: vegeta[100],
  mma: krillin[100],
  squash: krillin[100],
  boxing: dodoria[100],
  motorSports: dodoria[100],
  tableTennis: whis[100],
  cricket: krillin[100],
  politics: cell[100],
  tennis: raditz[100],
  cycling: krillin[100],
  pool: raditz[100],
  volleyBall: whis[100],
  darts: dodoria[100],
  popular: frieza[100],
  waterPolo: whis[100],
  eSports: frieza[100],
  sinuca: raditz[100],
};
