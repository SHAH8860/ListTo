import React, { useMemo, useState } from 'react'
// it return memorized value.
// run only when one of the dependencies changes
// its syntax is it will accept one function and controll usememo(function,[control])


function UseMemo() {
    const [count,setcount]=useState(0)
    const [min,setmin]=useState(100)
    const mul=useMemo(()=>{
        console.log('************')
        return count*10
    },[count])

  return (
    <>
    <div className='container'>
    <h1 className='text-center'><strong>UseMemo Hook</strong></h1>
        <h1>Count is:{count} and its mul is{mul} and min is{min}</h1>
        <div className="d-flex justify-content-around p-3">
            <button className='btn btn-success' onClick={()=>setcount(count+1)}>Inc</button>
            <button className='btn btn-danger' onClick={()=>setmin(min-1)}>DEC</button>

        </div>

    </div>

    </>
  )
}

export default UseMemo