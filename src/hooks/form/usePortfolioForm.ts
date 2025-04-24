import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PortfolioRequest, useCreatePortfolio } from '../../apis/portfolio';

const usePortfolioForm = () => {
  const navigate = useNavigate();
  const createPortfolioMutation = useCreatePortfolio();
  const {
    register,
    control,
    handleSubmit: handleSubmitWrapper,
  } = useForm<PortfolioRequest>();

  const handleSubmit: SubmitHandler<PortfolioRequest> = ({
    model,
    propensity,
  }) => {
    console.log(model, propensity);
    createPortfolioMutation.mutate(
      { model, propensity },
      {
        onSuccess: (data) => {
          navigate('/auth/portfolios/result', {
            state: data.detail.portfolio_id,
          });
        },
      },
    );
  };
  return {
    control,
    model: {
      ...register('model', { required: true }),
    },
    propensity: {
      ...register('propensity', { required: true }),
    },
    handleSubmit: handleSubmitWrapper(handleSubmit, () =>
      alert('항목을 모두 채워주세요'),
    ),
  };
};

export default usePortfolioForm;
