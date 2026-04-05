import React, { useEffect, useState, useRef } from 'react'
import Style1 from './Templates/Section'
import EditSection from './DynamicRendering'
import { useReactToPrint } from 'react-to-print'

function App() {
  const [field , setField] = useState("name")
  const resumeRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  })
  return (
    <div className='h-screen'>
      <div className='h-full flex justify-center items-center absolute top-0 left-0 bg-white'>
        <EditSection field={field} />
      </div>
      <Style1 setField={setField} resumeRef={resumeRef} />
      <button onClick={() => handlePrint()}>Download PDF</button>
    </div>
  )
}

export default App