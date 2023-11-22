import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

  //state to input value
  const[range,setRange] = useState("")
    //hook to dispatch a function in action
    const dispatch = useDispatch()
    //component can assecess the state by using useselector hook
    const count = useSelector((state)=>state.counter.value)

    console.log(range);

  return (
    <>    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className='bg-light p-5 rounded'>
      <h1 className='text-primary' >Counter Application</h1>
    <div className='bg-light justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4'> 
 <h1 className='d-flex justify-content-center align-items-center'>{count}</h1>
  </div>
  <div className='d-flex justify-content-between align-items-center mt-4'>
    
    <button onClick={()=>dispatch(increment(Number(range)))} className='bg-success text-white'style={{width:"100px",height:'50px',borderRadius:"10px", border:"none"}}>INCREMENT</button>
    {/* number is the method using string to number */}
    <button onClick={()=>dispatch(decrement(Number(range)))} className='bg-primary text-white'style={{width:"100px",height:'50px',borderRadius:"10px",border:"none"}}>DECREMENT</button>
    <button onClick={()=>dispatch(reset())} className='bg-danger text-white'style={{width:"100px",height:'50px',borderRadius:"10px",border:"none"}}>RESET</button>

  </div>
  <div className='w-100 mt-5'>
    <input onClick={(e)=>setRange(e.target.value)} type="text" placeholder='enter the range' style={{borderColor:'blue'}} />

  </div>
      </div>
    </div>
    
    </>
  )
}

export default Counter