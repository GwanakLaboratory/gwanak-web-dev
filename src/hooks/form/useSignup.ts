import { useMemo, MouseEvent, useState, useEffect } from 'react';
import { SubmitHandler, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import {
  AuthSignUpViewModel,
  useKaKaoInfoCheckMutation,
  useKaKaoValidateMutation,
  useSignInMutation,
  useSignUpMutation,
} from '../../apis';
import { accessTokenAtom } from '../../store/auth';
import useCustomForm from '../useCustomForm';

/** 테스트용: 휴대폰 카카오 본인인증 생략. 배포 전 `false`로 되돌릴 것 */
const SKIP_PHONE_VERIFICATION = true;

const useSignUpForm = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useCustomForm<AuthSignUpViewModel>();

  const signupMutation = useSignUpMutation();
  const signInMutation = useSignInMutation();
  const kakaoInfoCheckMutation = useKaKaoInfoCheckMutation();
  const verificationMutation = useKaKaoValidateMutation();

  const watchFields = useWatch({
    control,
    name: [
      'agreement',
      'birthday',
      'email',
      'nickname',
      'password',
      'passwordConfirm',
      'phoneNumber',
      'username',
    ],
  });

  const [
    agreementWatch,
    birthdayWatch,
    emailWatch,
    nicknameWatch,
    passwordWatch,
    passwordConfirmWatch,
    phoneNumberWatch,
    userNameWatch,
  ] = watchFields;

  const [certId, setCertId] = useState<string | null>(null);

  const userValid =
    SKIP_PHONE_VERIFICATION ||
    (verificationMutation.isSuccess && !verificationMutation.isPending);

  useEffect(() => {
    setCertId(null);
    verificationMutation.reset();
  }, [phoneNumberWatch, birthdayWatch, userNameWatch]);

  const signupButtonFlag = useMemo(
    () =>
      Boolean(
        agreementWatch &&
          birthdayWatch &&
          emailWatch &&
          nicknameWatch &&
          passwordConfirmWatch &&
          passwordWatch &&
          phoneNumberWatch &&
          userNameWatch,
      ),
    [watchFields],
  );

  const validateButtonFlag = useMemo(
    () =>
      Boolean(birthdayWatch && userNameWatch && phoneNumberWatch) &&
      !verificationMutation.isPending &&
      !kakaoInfoCheckMutation.isPending,
    [
      birthdayWatch,
      userNameWatch,
      phoneNumberWatch,
      verificationMutation.isPending,
      kakaoInfoCheckMutation.isPending,
    ],
  );

  const onSubmitHandler: SubmitHandler<AuthSignUpViewModel> = (data) => {
    if (userValid) {
      signupMutation.mutate(data, {
        onSuccess: () => {
          signInMutation.mutate(
            { email: data.email, password: data.password },
            {
              onSuccess: (res) => {
                setAccessToken(res.detail.access_token);
                navigate('/auth/portfolios', { replace: true });
              },
              onError: () => {
                alert(
                  '회원가입은 완료되었습니다. 로그인 페이지에서 다시 시도해 주세요.',
                );
                navigate('/login', { replace: true });
              },
            },
          );
        },
      });
    } else {
      alert('본인 인증을 다시 진행해주세요');
    }
  };

  const verificationButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (SKIP_PHONE_VERIFICATION) {
      return;
    }

    const username = getValues('username');
    const phoneNumber = getValues('phoneNumber');
    const birthday = getValues('birthday');

    if (!certId) {
      kakaoInfoCheckMutation.mutate(
        { fullName: username, phoneNumber, birthday },
        {
          onSuccess: (data) => {
            setCertId(data.detail.certId);
          },
        },
      );
    } else {
      verificationMutation.mutate({ certId });
    }
  };

  return {
    register,
    control,
    errors,
    handleSubmit,
    onSubmitHandler,
    verificationButtonHandler,
    certId,
    userValid,
    signupButtonFlag,
    validateButtonFlag,
  };
};

export default useSignUpForm;
