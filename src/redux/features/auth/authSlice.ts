import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
interface IAuth {
  user: object | null;
  token: string | null;
}

const initialState: IAuth = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ accessToken: string; user: object }>
    ) => {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: action.payload.accessToken,
          user: action.payload.user,
        })
      );
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      toast.success("Logging Out");
    },
  },
});
export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
