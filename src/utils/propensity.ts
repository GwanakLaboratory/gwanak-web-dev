type PropensityType = {
  typeNum: number;
  name: string;
  cashRatio: number;
};

const propensityList: PropensityType[] = [
  {
    typeNum: 1,
    name: '안정형',
    cashRatio: 0.4,
  },
  {
    typeNum: 2,
    name: '안정추구형',
    cashRatio: 0.3,
  },
  {
    typeNum: 3,
    name: '위험중립형',
    cashRatio: 0.2,
  },
  {
    typeNum: 4,
    name: '적극투자형',
    cashRatio: 0.1,
  },
  {
    typeNum: 5,
    name: '공격형',
    cashRatio: 0,
  },
];
const getPropensity = (typeNum: number | null) => {
  if (typeNum === null) return null;
  return propensityList[typeNum - 1];
};

export { getPropensity };
