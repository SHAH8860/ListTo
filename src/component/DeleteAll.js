import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteall } from '../Store/UserSlice'

function DeleteAll() {
    const dispatch=useDispatch()
    const all=()=>{
        dispatch(deleteall())

    }
  return (
    <>
    <button className='btn btn-primary' onClick={()=>{all()}}>DeleteAllItem</button>
    </>
  )
}

export default DeleteAll