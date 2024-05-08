import { useEffect } from "react";
import { useState } from "react"

const MouseMove=()=>{
  const [isEnable,setIsEnable]=useState(false),
  [position,setPosition]=useState({x:0,y:0});
  
  const handleMouse=(event)=>{
    const {clientX,clientY}= event;
    setPosition({x:clientX,y:clientY});
  }

  useEffect(()=>{
    if(isEnable){
      window.addEventListener('mousemove',handleMouse);
    }
    return ()=>{
      window.removeEventListener('mousemove',handleMouse);
    }
  },[isEnable]);

  useEffect(() => {
    document.body.classList.toggle('no-cursor', isEnable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [isEnable])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={()=>setIsEnable(!isEnable)}>{isEnable?'Desactivar':'Activar'} seguir mouse</button>
    </>

  )
}

function App() {
  return (
    <main>
      <MouseMove />

    </main>

  )
}

export default App
