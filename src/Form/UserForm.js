import React, {  useState } from "react";

function UserForm() {
    const user={UserName:'',email:'',desc:''}
    const [detail,setdetail]=useState(user)
    const handelChange=(e)=>{
        setdetail({...detail,[e.target.name]:e.target.value})
        console.log(detail)

    }
    function Formsubmit(e){
        console.log(detail)
        setdetail({UserName:'',email:'',desc:''})
        

    } 
  return (
    <>
    <h1>{detail.UserName}</h1>
      <form className="container mt-5" autoComplete="off" >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="UserName"
            value={detail.UserName}
            onChange={handelChange}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={detail.email}
            onChange={handelChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            name="desc"
            value={detail.desc}
            onChange={handelChange}
          ></textarea>
        </div>
        <div><button className="btn btn-primary" onClick={Formsubmit} type="button" >Send</button></div>
      </form>
    </>
  );
}

export default UserForm;
