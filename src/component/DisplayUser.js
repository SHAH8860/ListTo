import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { MdDelete } from "react-icons/md";
import { removeuser } from '../Store/UserSlice';

function DisplayUser() {
    const data=useSelector((state)=>{
        return state.user
    })
    const dispatch=useDispatch()
    const deleteItem=(id)=>{
        dispatch(removeuser(id))

    }
  return (
    <>
    {
        data.map((res,index)=>(
            <div className='container d-flex justify-content-between mt-3' key={index}>
                <div>
                    <li>{res}</li>
                </div>
                <div><button onClick={()=>{deleteItem(index)}}><MdDelete /></button></div>

            </div>
        ))
    }

    </>
  )
}

export default DisplayUser