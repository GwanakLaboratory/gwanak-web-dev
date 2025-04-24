const formattedRatio = (ratio: number) => {
  const fixedRatio = (ratio * 100).toFixed(2) + ' %';
  return fixedRatio;
};

export { formattedRatio };
