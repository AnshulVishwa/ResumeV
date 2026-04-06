import React, { useEffect } from 'react'
import { 
    AchievementsSection, 
    EducationSection, 
    ExperienceSection, 
    Header, 
    ProjectsSection, 
    SummarySection, 
    TechnicalSkillsSection 
} from './Section'
import { useDetailsContext } from '../DetailsContext'

function Page({resumeRef, pages, overFilled, setOverFilled, setField, onOverflow}) {

    const { details, setDetails } = useDetailsContext();

    useEffect(() => {
    if (resumeRef?.current) {
        // Use a 1px buffer to account for rounding errors
        const hasOverflow = resumeRef.current.scrollHeight > (resumeRef.current.clientHeight + 1);
        
        if (hasOverflow && onOverflow) {
            console.log("Overflow detected! Moving section...");
            onOverflow();
        }
    }
}, [pages, details]);
    return (
            <div className="resumePage p-20" ref={resumeRef} id="resume">
                {pages.map( page => {
                    if(page == "header"){
                        return <Header overFilled={overFilled} setOverFilled={setOverFilled} details={details} setDetails={setDetails} setField={setField}/>
                    }
                    if(page == "summary"){
                        return <SummarySection overFilled={overFilled} setOverFilled={setOverFilled} details={details} setDetails={setDetails} setField={setField}/>
                    }
                    if(page == "technicalSkills"){
                        return <TechnicalSkillsSection overFilled={overFilled} setOverFilled={setOverFilled} details={details} setDetails={setDetails} setField={setField}/>
                    }
                    if(page == "education"){
                        return <EducationSection overFilled={overFilled} setOverFilled={setOverFilled} details={details} setDetails={setDetails} setField={setField}/>
                    }
                    if(page == "achievements"){
                        return <AchievementsSection overFilled={overFilled} setOverFilled={setOverFilled} details={details} setDetails={setDetails} setField={setField}/>
                    }
                    if(page == "experience"){
                        return <ExperienceSection overFilled={overFilled} setOverFilled={setOverFilled} details={details} setDetails={setDetails} setField={setField}/>
                    }
                    if(page == "projects"){
                        return <ProjectsSection overFilled={overFilled} setOverFilled={setOverFilled} details={details} setDetails={setDetails} setField={setField}/>
                    }
                } )}
            </div>
    )
}

export default Page