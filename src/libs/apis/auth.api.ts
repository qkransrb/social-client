import axiosClient from ".";

const authApi = {
  signIn(data: any) {
    return axiosClient.post("/sign-in", data);
  },
};

export default authApi;
