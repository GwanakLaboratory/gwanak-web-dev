import Checkbox from '../../../components/common/Checkbox';
import { Link } from 'react-router-dom';
import useSignUpForm from '../../../hooks/form/useSignup';
import { S } from './style';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const { t } = useTranslation();
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
      <S.AuthPageTitle>{t('auth.signup.title')}</S.AuthPageTitle>
      <S.AuthSubtitle>
        {t('auth.signup.subtitle')}
      </S.AuthSubtitle>
      <S.SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
        <S.InputContainer>
          <S.Label>{t('auth.signup.email')}</S.Label>
          <S.SignUpInput
            {...register('email')}
            type="email"
            placeholder={t('auth.signup.emailPlaceholder')}
          />
          {errors.email && <S.FieldError>{errors.email.message}</S.FieldError>}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>{t('auth.signup.password')}</S.Label>
          <S.SignUpInput
            {...register('password')}
            type="password"
            placeholder={t('auth.signup.passwordPlaceholder')}
          />
          {errors.password && (
            <S.FieldError>{errors.password.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>{t('auth.signup.passwordConfirm')}</S.Label>
          <S.SignUpInput
            {...register('passwordConfirm')}
            type="password"
            placeholder={t('auth.signup.passwordConfirmPlaceholder')}
          />
          {errors.passwordConfirm && (
            <S.FieldError>{errors.passwordConfirm.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>{t('auth.signup.name')}</S.Label>
          <S.SignUpInput
            {...register('username')}
            type="text"
            placeholder={t('auth.signup.namePlaceholder')}
          />
          {errors.username && (
            <S.FieldError>{errors.username.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>{t('auth.signup.birthday')}</S.Label>
          <S.SignUpInput
            {...register('birthday')}
            type="text"
            placeholder={t('auth.signup.birthdayPlaceholder')}
          />
          {errors.birthday && (
            <S.FieldError>{errors.birthday.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>{t('auth.signup.nickname')}</S.Label>
          <S.SignUpInput
            {...register('nickname')}
            type="text"
            placeholder={t('auth.signup.nicknamePlaceholder')}
          />
          {errors.nickname && (
            <S.FieldError>{errors.nickname.message}</S.FieldError>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>{t('auth.signup.phone')}</S.Label>
          <S.InputWrapper>
            <S.horizontalInput
              {...register('phoneNumber', {
                pattern: {
                  value: /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/,
                  message: t('auth.signup.phoneInvalid'),
                },
              })}
              name="phoneNumber"
              type="text"
              placeholder={t('auth.signup.phonePlaceholder')}
            />
            <S.horizontalButton
              type="button"
              onClick={verificationButtonHandler}
              disabled={userValid || !validateButtonFlag}
              $active={validateButtonFlag && !userValid}
            >
              {certId ? t('auth.signup.verified') : t('auth.signup.verify')}
            </S.horizontalButton>
          </S.InputWrapper>
          {!userValid && certId && (
            <S.InputErrorStyle>{t('auth.signup.verifyHint')}</S.InputErrorStyle>
          )}
          {errors.phoneNumber && (
            <S.InputErrorStyle>{errors.phoneNumber.message}</S.InputErrorStyle>
          )}
        </S.InputContainer>
        <Checkbox
          value="1"
          label={t('auth.signup.agreement')}
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
          {t('auth.signup.submit')}
        </S.SubmitButton>
        <S.FooterLink>
          {t('auth.signup.hasAccount')} <Link to="/login">{t('auth.signup.login')}</Link>
        </S.FooterLink>
      </S.SignupForm>
    </S.AuthCard>
  );
};
export default SignUpPage;
