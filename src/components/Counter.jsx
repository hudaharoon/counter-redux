import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice';

function Counter() {
  const [range, setRange] = useState(1)
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  console.log("range", range);

  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <h1 style={{ color: "black", fontSize: "70px" }}>{count}</h1>
      <div >
        <button className='btn p-3 ms-2' style={{ backgroundColor: "red" }} onClick={() => dispatch(decrement(Number(range)))}>Decrement</button>
        <button className='btn p-3 ms-2' style={{ backgroundColor: "green" }} onClick={() => dispatch(increment(Number(range)))}>Increment</button>
        <button className='btn p-3 ms-2' style={{ width: "120px", backgroundColor: "blue" }} onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <input type="text" className='form-control w-100 mt-5' placeholder='Please enter the range' style={{ border: "blue" }}
          onChange={(e) => setRange(e.target.value)}/>

      </div>
    </div>
  )
}

export default Counter
