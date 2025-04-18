import {
  AuthKaKaoInfoRequest,
  AuthKaKaoInfoViewModel,
  AuthSignUpRequest,
  AuthSignUpViewModel,
} from './auth.model';

export const encodeSignUpRequest = (
  viewModel: AuthSignUpViewModel,
): AuthSignUpRequest => ({
  email: viewModel.email,
  password: viewModel.password,
  full_name: viewModel.username,
  nick_name: viewModel.nickname,
  phone_num: viewModel.phoneNumber,
  sex: viewModel.sex,
  age: viewModel.age,
});

export const encodeKaKaoValidateRequest = (
  viewModel: AuthKaKaoInfoViewModel,
): AuthKaKaoInfoRequest => {
  console.log({
    phone_number: viewModel.phoneNumber,
    full_name: viewModel.fullName,
    birthday: viewModel.birthday,
  });
  return {
    phone_number: viewModel.phoneNumber,
    full_name: viewModel.fullName,
    birthday: viewModel.birthday,
  };
};
