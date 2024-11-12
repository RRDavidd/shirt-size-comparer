import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSizes {
    height: number;
    neck: number;
    chest: number;
    waist: number;
  }

interface ShirtSizes {
    neck: number;
    chest: number;
    waist: number;
  }

  interface SizeState {
    userSizes: UserSizes;
    shirtSizes: ShirtSizes;
  }

  // Define the initial state
  const initialState: SizeState = {
    userSizes: {
      height: 0,
      neck: 0,
      chest: 0,
      waist: 0,
    },
    shirtSizes: {
      neck: 0,
      chest: 0,
      waist: 0,
    },
  };

// Create a slice
const sizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {
        setUserHeight: (state, action: PayloadAction<number>) => {
            state.userSizes.height = action.payload;
        },
        setUserNeck: (state, action: PayloadAction<number>) => {
            state.userSizes.neck = action.payload;
        },
        setUserChest: (state, action: PayloadAction<number>) => {
            state.userSizes.chest = action.payload;
        },
        setUserWaist: (state, action: PayloadAction<number>) => {
            state.userSizes.waist = action.payload;
        },
        setShirtNeck: (state, action: PayloadAction<number>) => {
            state.shirtSizes.neck = action.payload;
        },
        setShirtChest: (state, action: PayloadAction<number>) => {
            state.shirtSizes.chest = action.payload;
        },
        setShirtWaist: (state, action: PayloadAction<number>) => {
            state.shirtSizes.waist = action.payload;
        },
    }
});

export const {
    setUserHeight,
    setUserNeck,
    setUserChest,
    setUserWaist,
    setShirtNeck,
    setShirtChest,
    setShirtWaist } = sizeSlice.actions;

export default sizeSlice.reducer;