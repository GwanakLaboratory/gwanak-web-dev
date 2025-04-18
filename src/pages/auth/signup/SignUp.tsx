import Checkbox from '../../../components/common/Checkbox';
import Text from '../../../components/common/Text';
import DescriptionBox from '../../../components/feature/DescriptionBox';
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
  return (
    <>
      <DescriptionBox title="회원가입" />
      <S.SignupContainer onSubmit={handleSubmit(onSubmitHandler)}>
        <S.InputContainer>
          <Text typograph="lg_bold" color="Black">
            이메일
          </Text>
          <S.SignUpInput
            {...register('email')}
            type="email"
            placeholder="이메일 주소를 입력해주세요"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </S.InputContainer>
        <S.InputContainer>
          <Text typograph="lg_bold" color="Black">
            비밀번호
          </Text>
          <S.SignUpInput
            {...register('password')}
            type="password"
            placeholder="영문/숫자/특수문자가 포함된 8자리 이상"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </S.InputContainer>
        <S.InputContainer>
          <Text typograph="lg_bold" color="Black">
            비밀번호 확인
          </Text>
          <S.SignUpInput
            {...register('passwordConfirm')}
            type="password"
            placeholder="다시 한 번 입력해주세요"
          />
          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        </S.InputContainer>
        <S.InputContainer>
          <Text typograph="lg_bold" color="Black">
            이름
          </Text>
          <S.SignUpInput
            {...register('username')}
            type="text"
            placeholder="예) 홍길동"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </S.InputContainer>
        <S.InputContainer>
          <Text typograph="lg_bold" color="Black">
            생일
          </Text>
          <S.SignUpInput
            {...register('birthday')}
            type="text"
            placeholder="예) 20010529"
          />
          {errors.birthday && <p>{errors.birthday.message}</p>}
        </S.InputContainer>
        <S.InputContainer>
          <Text typograph="lg_bold" color="Black">
            닉네임
          </Text>
          <S.SignUpInput
            {...register('nickname')}
            type="text"
            placeholder="최대 8글자"
          />
          {errors.nickname && <p>{errors.nickname.message}</p>}
        </S.InputContainer>
        <S.InputContainer>
          <Text typograph="lg_bold" color="Black">
            휴대폰번호
          </Text>
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
              onClick={verificationButtonHandler}
              disabled={userValid || !validateButtonFlag}
              flag={validateButtonFlag && !userValid}
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
          style={{ textDecoration: 'underline' }}
        />
        <S.LoginButton
          type="submit"
          flag={userValid && signupButtonFlag}
          disabled={!userValid || !signupButtonFlag}
        >
          가입하기
        </S.LoginButton>
      </S.SignupContainer>
    </>
  );
};
export default SignUpPage;
