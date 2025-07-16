import axiosClient from ".";
import { SignInInputs, SignUpInputs } from "../types/auth.type";

const authApi = {
  signUp(data: SignUpInputs) {
    return axiosClient.post<IAuthResponse>("/auth/sign-up", data);
  },
  signIn(data: SignInInputs) {
    return axiosClient.post<IAuthResponse>("/auth/sign-in", data);
  },
};

export default authApi;
