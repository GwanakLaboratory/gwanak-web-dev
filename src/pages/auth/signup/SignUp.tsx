import Checkbox from '../../../components/common/Checkbox';
import { Link } from 'react-router-dom';
import useSignUpForm from '../../../hooks/form/useSignup';
import { S } from './style';

const SignUpPage = () => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmitHandler,
    verificationButtonHandler,
    certId,
    userValid,
    signupButtonFlag,
    validateButtonFlag,
  } = useSignUpForm();
  const canSubmit = userValid && signupButtonFlag;
  return (
    <S.AuthCard>
      <S.AuthPageTitle>회원가입</S.AuthPageTitle>
      <S.AuthSubtitle>
        관악연구소 서비스 이용을 위해 정보를 입력해 주세요.
      </S.AuthSubtitle>
      <S.SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
        <S.InputContainer>
          <S.Label>이메일</S.Label>
          <S.SignUpInput
            {...register('email')}
            type="email"
            placeholder="이메일 주소를 입력해주세요"
          />
          {errors.email && <S.FieldError>{errors.email.message}</S.FieldError>}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>비밀번호</S.Label>
          <S.SignUpInput
            {...register('password')}
            type="password"
            placeholder="영문/숫자/특수문자가 포함된 8자리 이상"
          />
          {errors.password && (
            <S.FieldError>{errors.password.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>비밀번호 확인</S.Label>
          <S.SignUpInput
            {...register('passwordConfirm')}
            type="password"
            placeholder="다시 한 번 입력해주세요"
          />
          {errors.passwordConfirm && (
            <S.FieldError>{errors.passwordConfirm.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>이름</S.Label>
          <S.SignUpInput
            {...register('username')}
            type="text"
            placeholder="예) 홍길동"
          />
          {errors.username && (
            <S.FieldError>{errors.username.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>생일</S.Label>
          <S.SignUpInput
            {...register('birthday')}
            type="text"
            placeholder="예) 20010529"
          />
          {errors.birthday && (
            <S.FieldError>{errors.birthday.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>닉네임</S.Label>
          <S.SignUpInput
            {...register('nickname')}
            type="text"
            placeholder="최대 8글자"
          />
          {errors.nickname && (
            <S.FieldError>{errors.nickname.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>휴대폰번호</S.Label>
          <S.InputWrapper>
            <S.horizontalInput
              {...register('phoneNumber', {
                pattern: {
                  value: /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/,
                  message: '전화번호 형식에 맞게 입력해주세요.',
                },
              })}
              name="phoneNumber"
              type="text"
              placeholder="숫자만 입력해주세요."
            />
            <S.horizontalButton
              type="button"
              onClick={verificationButtonHandler}
              disabled={userValid || !validateButtonFlag}
              $active={validateButtonFlag && !userValid}
            >
              {certId ? '인증완료' : '인증'}
            </S.horizontalButton>
          </S.InputWrapper>
          {!userValid && certId && (
            <S.InputErrorStyle>
              카카오톡에서 인증완료시 위의 인증완료 버튼을 눌러주세요.
            </S.InputErrorStyle>
          )}
          {errors.phoneNumber && (
            <S.InputErrorStyle>{errors.phoneNumber.message}</S.InputErrorStyle>
          )}
        </S.InputContainer>
        <Checkbox
          value="1"
          label="이용약관 및 개인정보수집방침에 동의합니다."
          {...register('agreement', { required: true })}
          labelStyle={{
            fontSize: '14px',
            color: '#5c6178',
            lineHeight: '1.45',
            textDecoration: 'underline',
          }}
        />
        <S.SubmitButton
          type="submit"
          disabled={!canSubmit}
          $active={canSubmit}
        >
          가입하기
        </S.SubmitButton>
        <S.FooterLink>
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </S.FooterLink>
      </S.SignupForm>
    </S.AuthCard>
  );
};
export default SignUpPage;
