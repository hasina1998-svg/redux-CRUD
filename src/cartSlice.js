import { createSlice } from "@reduxjs/toolkit";
import fakeData from "./fakeData";

console.log(fakeData);
const userSlice = createSlice({
  name: "users",
  initialState: {
    value: fakeData,
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    // deleteUser:(state,action)=>{
    //   state.value=state.value.filter=(user)=>
    //     user.id!==action.payload.id;
      

    // }
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername:(state,action)=>{
      state.value.map((user)=>{
        if(user.id===action.payload.id){
          user.username=action.payload.username;
        }
      })

    },
    increment:(state, action) =>{
      state.value.fakeData.push('eydean')

    }
  },
});
export const { addUser,deleteUser ,updateUsername,increment} = userSlice.actions;
export default userSlice.reducer;
