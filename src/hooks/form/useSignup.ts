import { useMemo, MouseEvent, useState, useEffect } from 'react';
import { SubmitHandler, useWatch } from 'react-hook-form';
import {
  AuthSignUpViewModel,
  useKaKaoInfoCheckMutation,
  useKaKaoValidateMutation,
  useSignUpMutation,
} from '../../apis';
import useCustomForm from '../useCustomForm';

const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useCustomForm<AuthSignUpViewModel>();

  const signupMutation = useSignUpMutation();
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
    verificationMutation.isSuccess && !verificationMutation.isPending;

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
      signupMutation.mutate(data);
    } else {
      alert('본인 인증을 다시 진행해주세요');
    }
  };

  const verificationButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
