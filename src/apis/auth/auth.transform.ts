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
  username: viewModel.username,
  nickname: viewModel.nickname,
  phoneNumber: viewModel.phoneNumber,
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
