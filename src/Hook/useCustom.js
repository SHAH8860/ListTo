import { useState } from 'react'

function useCustom(initial) {
  const [count,setcount]=useState(initial)
  function inc(){
    setcount(count+1)
  }
  function dec(){
    setcount(count-1)
  }
  return [count,inc,dec]
}

export default useCustom