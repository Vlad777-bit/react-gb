import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  cheked: boolean;
}

const initialState: ProfileState = {
  cheked: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    checkedProfile(state, action: PayloadAction<boolean>) {
      state.cheked = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { checkedProfile } = profileSlice.actions;
