import { S } from './style';
import useCustomForm from '../../../hooks/useCustomForm';
import { useWatch } from 'react-hook-form';
import { useSignInMutation } from '../../../apis';
import { Link, useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../../store/auth';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../../../i18n/useLocalizedPath';

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { t } = useTranslation();
  const loginMutation = useSignInMutation();
  const navigate = useNavigate();
  const localizedPath = useLocalizedPath();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useCustomForm<LoginForm>();
  const [email, password] = useWatch({
    control,
    name: ['email', 'password'],
  });
  const isFilled = !!email?.trim() && !!password?.trim();
  return (
    <S.AuthCard>
      <S.AuthPageTitle>{t('auth.login.title')}</S.AuthPageTitle>
      <S.AuthSubtitle>
        {t('auth.login.subtitle')}
      </S.AuthSubtitle>
      <S.LoginForm
        onSubmit={handleSubmit((data) => {
          loginMutation.mutate(data, {
            onSuccess: (res) => {
              // 로그인 성공 시 accessToken을 먼저 세팅한 뒤 이동(RequireAuth 리다이렉트 레이스 방지)
              setAccessToken(res.detail.access_token);
              navigate(localizedPath('/auth/portfolios'));
            },
            onError: () => {
              alert(t('auth.login.invalidCredential'));
            },
          });
        })}
      >
        <S.Field>
          <S.Label htmlFor="login-email">{t('auth.login.email')}</S.Label>
          <S.AuthInput
            id="login-email"
            placeholder="abc@email.com"
            type="email"
            autoComplete="email"
            {...register('email', {
              required: t('auth.login.requiredEmail'),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('auth.login.invalidEmail'),
              },
            })}
          />
          {errors.email && (
            <S.FieldError>{errors.email.message}</S.FieldError>
          )}
        </S.Field>
        <S.Field>
          <S.Label htmlFor="login-password">{t('auth.login.password')}</S.Label>
          <S.AuthInput
            id="login-password"
            placeholder={t('auth.login.passwordPlaceholder')}
            type="password"
            autoComplete="current-password"
            {...register('password', { required: t('auth.login.requiredPassword') })}
          />
          {errors.password && (
            <S.FieldError>{errors.password.message}</S.FieldError>
          )}
        </S.Field>
        <S.LoginButton type="submit" disabled={!isFilled} $active={isFilled}>
          {t('auth.login.submit')}
        </S.LoginButton>
        <S.FooterLink>
          {t('auth.login.noAccount')} <Link to={localizedPath('/signup')}>{t('auth.login.signup')}</Link>
        </S.FooterLink>
      </S.LoginForm>
    </S.AuthCard>
  );
};
export default LoginPage;
