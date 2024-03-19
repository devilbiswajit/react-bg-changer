import { useState } from 'react'


function App() {
  const [color,setColor]=useState("olive")
  const setBlack=()=>{
    setColor("black")
  }
  
  return (
   <div className="w-full h-screen " style={{backgroundColor:color}} >
   
   <div className='bg-blue-200 mt-5 w-full justify-center text-center flex fixed gap-20'>

   <button className='bg-red-600 text-black rounded-full px-5 py-2 m-1' onClick={()=>setColor("red")}>Red</button>
    <button className='bg-black text-white rounded-full px-5 py-2 m-1' onClick={setBlack}>Black</button>
    <button className='bg-blue-600 text-black rounded-full px-5 py-2 m-1' onClick={()=>setColor("blue")}>Blue</button>
    <button className='bg-pink-600 text-black rounded-full px-5 py-2 m-1' onClick={()=>setColor("pink")}>Pink</button>
    <button className='bg-yellow-400 text-black rounded-full px-5 py-2 m-1' onClick={()=>setColor("yellow")}>Yellow</button>
    <button className='bg-orange-600 text-black rounded-full px-5 py-2 m-1' onClick={()=>setColor("orange")}>Orange</button>
    <button className='bg-green-600 text-black rounded-full px-5 py-2 m-1' onClick={()=>setColor("green")}>Green</button>
    <button className='bg-white text-black rounded-full px-5 py-2 m-1' onClick={()=>setColor("white")}>White</button>
    
   </div>
   
    
    </div>
  )
}

export default App
