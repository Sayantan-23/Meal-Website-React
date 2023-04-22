import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealUrl: [],
};

export const apiUrlSlice = createSlice({
  name: "mealApiUrl",
  initialState,
  reducers: {
    setSearchUrl: (state, action) => {
      state.mealUrl = []
      let data = action.payload;
      if (!data){}
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
      state.mealUrl.push(url);
    },
  },
});

export const { setSearchUrl } = apiUrlSlice.actions;

export default apiUrlSlice.reducer;
