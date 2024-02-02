import React, { useRef, useState } from "react";
// useref hook used to manipulate dom element
// it is jst like viewchild in angular or document.getelementbyid() and performing some action onit


function UseRef() {
  const useref = useRef('');
  const [name, setname] = useState();
  function Handle() {
    useref.current.style.color = "blue";
    useref.current.value = "blue";
  }
  return (
    <>
    <div className="container">
    <h1 className='text-center'><strong>UseRef Hook</strong></h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            ref={useref}
            type="type"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={Handle}>
          Submit
        </button>
      </form>
      </div>
    </>
  );
}

export default UseRef;
