import React, { Suspense } from 'react'
import useCustom from './useCustom'
const  UseReduce=React.lazy(()=>import("./UseReduce"))
const UseMemo=React.lazy(()=>import( "./UseMemo"))
const UseRef =React.lazy(()=>import("./UseRef"))
const UseCallBack=React.lazy(()=>import("./UseCallBack"))

function AllHook() {
    const [count,inc,dec]=useCustom(0)
  return (
    <>
    <div className="container mt-5 border">
        <h1 className='text-center'><strong>All Hook Used In React</strong></h1>
  <div className="row mt-5">
    <div className="col-6  border"><Suspense fallback={<div>Loading...</div>}><UseReduce/></Suspense></div>
    <div className="col-6  border"><Suspense fallback={<div>Loading...</div>}><UseMemo/></Suspense></div>
    <div className="col-6  border" ><Suspense fallback={<div>Loading...</div>}><UseRef/></Suspense></div>
    <div className="col-6  border"><Suspense fallback={<div>Loading...</div>}><UseCallBack/></Suspense></div>
    <div className="col-6  border">
        <div className='container'>
            <h1 className='text.center'><strong>Custom Hook</strong></h1>
            <div className='container'>
                <h1>{count}</h1>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-primary' onClick={inc}>Increment</button>
                    <button className='btn btn-danger' onClick={dec}>Decrement</button>
                </div>
            </div>

        </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AllHook