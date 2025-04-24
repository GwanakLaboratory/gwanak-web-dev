const formattedRatio = (ratio: number) => {
  const fixedRatio = (ratio * 100).toFixed(2) + ' %';
  return fixedRatio;
};

const formattedModel = (model: string) => {
  if (model === 'TE') return 'TE국내개별';
  if (model === 'ETF') return 'TP국내ETF';
  if (model === 'ETF_TQ') return 'TTP국내ETF';
  if (model === 'STOCK_ETF') return 'TP국내상장';
  if (model === 'STOCK_ETF_TQ') return 'TTP국내상장';
  else return '오류';
};

export { formattedRatio, formattedModel };
