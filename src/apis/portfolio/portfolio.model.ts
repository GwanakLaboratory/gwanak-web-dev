export type PortfolioRequest = {
  propensity: number;
  model: string;
};

export type PortfolioResponse = {
  detail: {
    portfolio_id: string;
  };
};

export type Stock = {
  stock_code: string;
  stock_name: string;
  ratio: number;
};

export type PortfolioInfoResponse = {
  detail: {
    portfolio: {
      id: string;
      title: string;
      total_money: string;
      model: string;
      is_result: boolean;
      propensity: number;
      stock_list: Stock[];
      created_at: string;
      updated_at: string;
    };
  };
};

export type PortfolioUpdateRequest = {
  title: string;
  account: number;
  portfolioId: string;
};
