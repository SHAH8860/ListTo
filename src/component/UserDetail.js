import React from 'react'
import Chance from 'chance'
import { useDispatch } from 'react-redux'
import { adduser } from '../Store/UserSlice'
import DisplayUser from './DisplayUser'
import DeleteAll from './DeleteAll'

const chance=Chance()

function UserDetail() {
  const dispatch=useDispatch()
  const userData=()=>{
    let paylod=chance.name({ middle: true })
    dispatch(adduser(paylod))
  }
  return (
    <>
    <div className='container mt-5'>
    <div className="d-flex justify-content-between">
        <div><h1><strong>List Of Item</strong></h1></div>
        <div><button className='btn btn-primary' onClick={()=>{userData()}}>Add New Item</button></div>
    </div>
    <ul>
      <DisplayUser/>
    </ul>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-center'>
      <DeleteAll/>

    </div>
    </>
  )
}

export default UserDetail