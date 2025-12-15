import { useState,useCallback,useEffect,useRef } from 'react'




function App() {
  const [length, setlength] = useState(8)
  const[numallowed,setnumallowed]= useState(false)
  const[charallowed,setcharallowed]= useState(false)
  const[password,setpassword]= useState("")


  const passref=useRef(null)

  const passwordgenerator =useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numallowed) str+= "0123456789"
     if(charallowed) str+= "!@#$%&^*/?"

     for (let i = 1 ; i<= length; i++){
        let char= Math.floor(Math.random()*str.length+1)
        pass +=str.charAt(char)
   
     }
     setpassword(pass)
  },[length,numallowed,charallowed,setpassword])
  const copypasswordtoclipboard =useCallback(()=>{
     passref.current?.select();
     passref.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password )
  },[password]) 
  useEffect(()=>{
    passwordgenerator()
  },[length,numallowed,charallowed,passwordgenerator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700 text-center'>TEST
        <h1 className=' text-white text-center'>PASSWORD GENERATOR</h1>
        <div className ='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passref}/>
          <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setlength(e.target.value)
            }}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            // defaultChecked= '{numallowed}'
            id='numberInput'
            onChange={()=>{
              setnumallowed((prev)=>!prev)
            }}/>
            <label htmlFor='charInput'>NUMBERS</label>
          </div>
            <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            // defaultChecked= '{charallowed}'
            id='charInput'
            onChange={()=>{
              setcharallowed((prev)=>!prev)
            }}/>
            <label htmlFor='charInput'>CHARACTERS</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
