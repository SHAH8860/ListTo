import React, { useReducer } from 'react';

function UseReduce() {
    const reducer = (state, action) => {
        switch (action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            return { count: state.count - 1 };
          default:
            return state;
        }
      };
      const [state, dispatch] = useReducer(reducer, { count: 0 });
    
  return (
    <>
    <div className='container'>
    <h1 className='text-center'><strong>UseReduce Hook</strong></h1>
     <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
    </>
  )
}

export default UseReduce