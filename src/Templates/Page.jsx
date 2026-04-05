import React from 'react'

function Page() {
    return (
        <main className="container">
            <div className="resumePage p-10" ref={resumeRef} id="resume">
                <header className='border-b-2 border-[#e5e5e5] px-6 py-4'>
                    <span onClick={() => setField("name")} className='font-bold text-2xl mb-2'>{details.name}</span>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                        <span className='font-medium' onClick={() => setField("role")}>{details.role}</span>
                        <span onClick={() => setField("email")}>Email: {details.email}</span>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                        <span onClick={() => setField("linkedin")}>LinkedIn: <a href={details.linkedin} target="_blank" rel="noopener noreferrer">{details.linkedin}</a></span>
                        <span onClick={() => setField("phone")}>Phone: {details.phone}</span>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                        <span onClick={() => setField("github")}>GitHub: <a href={details.github} target="_blank" rel="noopener noreferrer">{details.github}</a></span>
                        <span onClick={() => setField("address")}>Address: {details.address}</span>
                    </div>
                    <span onClick={() => setField("portfolio")}>Portfolio: <a href={details.portfolio} target="_blank" rel="noopener noreferrer">{details.portfolio}</a></span>
                </header>
                <div >
                    <section className='border-b-2 border-[#e5e5e5] pb-2 p-4'>
                        <p className='font-bold text-lg mb-2 '>SUMMARY</p>
                        <p onClick={() => setField("summary")}>{details.summary}</p>
                    </section>
                    <section className='border-b-2 border-[#e5e5e5] pb-2 p-4'>
                        <p className='font-bold text-lg mb-2 '>TECHNICAL SKILLS</p>
                        <p className='cursor-pointer' onClick={() => setField("languages")}>Languages: {details.skills[0].languages.join(", ")}</p>
                        <p className='cursor-pointer' onClick={() => setField("frameworks")}>Frameworks: {details.skills[0].frameworks.join(", ")}</p>
                        <p className='cursor-pointer' onClick={() => setField("tools")}>Tools: {details.skills[0].tools.join(", ")}</p>
                    </section>

                </div>
            </div>
        </main>
    )
}

export default Page