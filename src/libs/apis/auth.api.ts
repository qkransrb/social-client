import axiosClient from ".";
import { SignUpInputs } from "../types/auth.type";

const authApi = {
  signUp(data: SignUpInputs) {
    return axiosClient.post<IAuthResponse>("/auth/sign-up", data);
  },
};

export default authApi;
