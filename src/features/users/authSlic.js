import { createSlice } from "@reduxjs/toolkit";

const admin = []

const authSlice = createSlice({

    name: "auth",
    initialState: admin,
    reducers: {
        registerUser : (state, action)=>{
            const user = action.payload;
            user.email &&  state.push(user)
           
        }
    }
    
})

export default usersSlice.reducer;
export const { registerUser} = authSlice.actions 