import { createSlice } from "@reduxjs/toolkit";
import {data} from "../../components/Data";





const usersSlice = createSlice({
    name: "users",
    initialState: data,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload
            const updatingUser = state.find(user => user.id == id);
            if(updatingUser) {
                updatingUser.name = name;
                updatingUser.email = email;
            }
        },
        deleteUser: (state, action) =>{
            console.log(action.payload);
            const {id} = action.payload;
            const deleteUser = state.find(user => user.id == id);
            console.log(deleteUser);
            if(deleteUser){
                return state.filter(user => user.id !== id )
            }

        },
    }
})

export default usersSlice.reducer;
export const {addUser, updateUser, deleteUser} = usersSlice.actions 