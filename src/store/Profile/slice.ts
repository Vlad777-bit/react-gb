import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  cheked: boolean;
  isAuth: boolean;
}

const initialState: ProfileState = {
  cheked: false,
  isAuth: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    checkedProfile(state, action: PayloadAction<boolean>) {
      state.cheked = action.payload;
    },

    auth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { checkedProfile, auth } = profileSlice.actions;
