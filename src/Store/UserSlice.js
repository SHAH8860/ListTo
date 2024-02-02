import { createSlice } from '@reduxjs/toolkit'
const UserSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        adduser(state,action){
            state.push(action.payload)
        },
        removeuser(state,action){
            state.splice(action.payload,1)
        },
        deleteall(state,action){
            return []
        }
    }
})
 export const{adduser,removeuser,deleteall}=UserSlice.actions
export default UserSlice