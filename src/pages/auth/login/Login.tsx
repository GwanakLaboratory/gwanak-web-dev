import DescriptionBox from '../../../components/feature/DescriptionBox';
import { S } from './style';
import Input from '../../../components/common/Input';
import { COLOR } from '../../../lib/constants';
import useCustomForm from '../../../hooks/useCustomForm';
import { useWatch } from 'react-hook-form';
import { useSignInMutation } from '../../../apis';
import { Link, useNavigate } from 'react-router-dom';

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const loginMutation = useSignInMutation();
  const navigate = useNavigate();
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
    <>
      <DescriptionBox title="로그인" />
      <S.LoginContainer
        onSubmit={handleSubmit((data) => {
          loginMutation.mutate(data, {
            onSuccess: () => {
              navigate('/auth/portfolios');
            },
            onError: () => {
              alert('아이디 혹은 비밀번호가 틀렸습니다.');
            },
          });
        })}
      >
        <S.LoginTitleWrapper>
          <S.LoginTitleText>당신의 금융성향에 맞는</S.LoginTitleText>
          <S.LoginTitleText>포트폴리오를 만들어보세요!</S.LoginTitleText>
        </S.LoginTitleWrapper>
        <S.LoginInputContainer className="layout-padding">
          <Input
            placeholder="abc@email.com"
            type="email"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '이메일 형식이 올바르지 않습니다',
              },
            })}
            style={{ borderBottom: `5px solid ${COLOR.Grey100}` }}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            {...register('password', { required: '비밀번호를 입력해주세요' })}
            style={{ borderBottom: `5px solid ${COLOR.Grey100}` }}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <S.LoginButton disabled={!isFilled} isFilled={isFilled}>
            로그인
          </S.LoginButton>
          <S.LoginSubText>
            <span style={{ color: '#aaa' }}>
              회원 가입이 아직 안되어있다면?
            </span>{' '}
            <Link to="/signup" style={{ textDecoration: 'underline' }}>
              회원가입
            </Link>
          </S.LoginSubText>
        </S.LoginInputContainer>
      </S.LoginContainer>
    </>
  );
};
export default LoginPage;
