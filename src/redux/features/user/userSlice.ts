import { auth } from "@/lb/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface IUserCrendtial {
  email: string;
  password: string;
}

interface IUserInitialState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | undefined | null;
}
const initialState: IUserInitialState = {
  user: {
    email: null,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: IUserCrendtial) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return user.user.email;
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: IUserCrendtial) => {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return user.user.email;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
      state.isSuccess = false;
      state.isError = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // Handle Create User Action
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user.email = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })

      // Handle LogIn Action
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user.email = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});
export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
