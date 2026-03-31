import { S } from './style';
import useCustomForm from '../../../hooks/useCustomForm';
import { useWatch } from 'react-hook-form';
import { useSignInMutation } from '../../../apis';
import { Link, useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../../store/auth';

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const loginMutation = useSignInMutation();
  const navigate = useNavigate();
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
      <S.AuthPageTitle>로그인</S.AuthPageTitle>
      <S.AuthSubtitle>
        당신의 금융 성향에 맞는 포트폴리오를 만들어보세요.
      </S.AuthSubtitle>
      <S.LoginForm
        onSubmit={handleSubmit((data) => {
          loginMutation.mutate(data, {
            onSuccess: (res) => {
              // 로그인 성공 시 accessToken을 먼저 세팅한 뒤 이동(RequireAuth 리다이렉트 레이스 방지)
              setAccessToken(res.detail.access_token);
              navigate('/auth/portfolios');
            },
            onError: () => {
              alert('아이디 혹은 비밀번호가 틀렸습니다.');
            },
          });
        })}
      >
        <S.Field>
          <S.Label htmlFor="login-email">이메일</S.Label>
          <S.AuthInput
            id="login-email"
            placeholder="abc@email.com"
            type="email"
            autoComplete="email"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '이메일 형식이 올바르지 않습니다',
              },
            })}
          />
          {errors.email && (
            <S.FieldError>{errors.email.message}</S.FieldError>
          )}
        </S.Field>
        <S.Field>
          <S.Label htmlFor="login-password">비밀번호</S.Label>
          <S.AuthInput
            id="login-password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            autoComplete="current-password"
            {...register('password', { required: '비밀번호를 입력해주세요' })}
          />
          {errors.password && (
            <S.FieldError>{errors.password.message}</S.FieldError>
          )}
        </S.Field>
        <S.LoginButton type="submit" disabled={!isFilled} $active={isFilled}>
          로그인
        </S.LoginButton>
        <S.FooterLink>
          아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </S.FooterLink>
      </S.LoginForm>
    </S.AuthCard>
  );
};
export default LoginPage;
