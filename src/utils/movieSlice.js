import { createSlice } from "@reduxjs/toolkit";


const moviewSlice = createSlice({
  name: "moviews",
  initialState: {
    nowPlayingMoview: null,
    trailerVideo:null
  },
  reducers: {
    addNowPlayingMoview: (state, action) => {
      state.nowPlayingMoview = action.payload;
    },
    addTrailerVideo:(state ,action)=>{
      state.trailerVideo = action.payload
    }
  },
});
 export const {addNowPlayingMoview,addTrailerVideo} = moviewSlice.actions
export default moviewSlice.reducer