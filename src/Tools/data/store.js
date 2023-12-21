import {configureStore} from "@reduxjs/toolkit"
import modeSliceReducer from "../modeSlice"

export const store = configureStore({
    reducer : {
        modeSliceReducer,
    }
})