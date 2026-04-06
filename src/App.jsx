import React, { useEffect, useState, useRef } from 'react'
import EditSection from './DynamicRendering'
import Page from './Templates/Page'
import { useReactToPrint } from 'react-to-print';

function App() {
  const [page1, setPage1] = useState(["header", "summary", "technicalSkills", "education", "achievements", "experience", "projects"]);
  const [page2, setPage2] = useState([]);
  const [field , setField] = useState("name")
  const resumeRef = useRef(null);
  const printRef = useRef(null);

  const handleOverflow = () => {
    setPage1((prevPage1) => {
      if (prevPage1.length === 0) return prevPage1;

      const lastSection = prevPage1[prevPage1.length - 1];
      
      setPage2((prevPage2) => {
        if (prevPage2.includes(lastSection)) return prevPage2;
        return [lastSection, ...prevPage2];
      });
      return prevPage1.slice(0, -1);
    });
  };

  const handlePrint = useReactToPrint( {
      contentRef : printRef,
      documentTitle : "Resume",
      onAfterPrint : () => alert("Resume printed successfully")
    } )

  return (
    <>
      <EditSection field={field} setField={setField} />
      <div ref={printRef} className='flex flex-col items-center bg-gray-200'>
        <Page 
          resumeRef={resumeRef} 
          pages={page1} 
          onOverflow={handleOverflow} 
          setField={setField}
        />

        {page2.length > 0 && (
          <Page 
            pages={page2} 
            setField={setField} 
          />
        )}
      </div>
      <button onClick={handlePrint}>Print</button>
    </>
  );
}

export default App