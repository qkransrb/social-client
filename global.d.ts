interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface IAuthResponse {
  message: string;
  data: IUser;
  accessToken: string;
}
