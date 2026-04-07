import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PortfolioRequest, useCreatePortfolio } from '../../apis/portfolio';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';

const usePortfolioForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const localizedPath = useLocalizedPath();
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
          navigate(localizedPath('/auth/portfolios/result'), {
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
      alert(t('portfolio.fillAll')),
    ),
  };
};

export default usePortfolioForm;
