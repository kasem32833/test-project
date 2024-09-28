import { createSlice } from "@reduxjs/toolkit";
import {data} from "../../components/Data"



const usersSlice = createSlice({
    name: "users",
    initialState: data,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        } 
    }
})

export default usersSlice.reducer;
export const {addUser} = usersSlice.actions