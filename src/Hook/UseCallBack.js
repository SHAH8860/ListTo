import React, { useCallback, useState } from 'react'
// it return memorized function
// call when dependencies update
//

function UseCallBack() {
    const [count,setcount]=useState(0)
    const usecall=useCallback(()=>{
       setcount(count+1)
    },[count])
  return (
    <>
    <div className='container'>
      <h1 className='text-center'><strong>UseCallBackHook</strong></h1>
    <h1>{count}</h1>
    <button className='btn btn-primary' onClick={usecall}>Inc</button>
    </div>


    </>
  )
}

export default UseCallBack