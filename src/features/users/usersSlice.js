import { createSlice } from "@reduxjs/toolkit";
import {data} from "../../components/Data"



const usersSlice = createSlice({
    name: "users",
    initialState: data,
    reducers: {

    }
})
    
export default usersSlice.reducer;