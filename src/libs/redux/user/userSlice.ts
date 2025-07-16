import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISetUserPayload {
  user: IUser;
  accessToken: string;
}

export interface UserState {
  data: IUser;
  isAuthenticated: boolean;
  accessToken: string;
}

const initialState: UserState = {
  data: {
    _id: "",
    name: "",
    email: "",
    role: "user",
    isActive: false,
  },
  isAuthenticated: false,
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ISetUserPayload>) => {
      state.data = action.payload.user;
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;

      localStorage.setItem("user", JSON.stringify(state.data));
      localStorage.setItem("isAuthenticated", `${state.isAuthenticated}`);
      localStorage.setItem("accessToken", state.accessToken);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
