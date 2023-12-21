import { createSlice } from "@reduxjs/toolkit"

const initialState = { value : (false)}

const modeSlice = createSlice({
   name: "modelSlice",
   initialState,
   reducers : {
     tombol : (state) => state.value = !state.value
   }
})

export const [ tombol ] = modeSlice.actions
export default modeSlice.reducer


