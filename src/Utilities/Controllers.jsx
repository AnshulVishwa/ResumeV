import { useState } from "react";

export function EditContactInfo({field, details, setDetails}){
    return(
        <div>
            <input 
                value={details[field]} 
                onChange={(e) => setDetails({...details, [field]: e.target.value})} 
                type="text" 
                placeholder={field} 
                className='border border-gray-300 rounded-md px-2 py-1' />
        </div>
    )
}

export function EditSkills({field, details, setDetails}){
    const currentSkills = details.skills[0][field]; 

    const [newSkill, setNewSkill] = useState(null);

    return(
        <div>
            <p className='font-bold capitalize mb-2'>{field}</p>
            <input 
                value={newSkill} 
                onChange={(e) => setNewSkill(e.target.value)} 
                type="text" 
                placeholder={field} 
                className='border border-gray-300 rounded-md px-2 py-1' />
            <button onClick={() => {
        if (!newSkill.trim()) return; 

        setDetails((prev) => ({
            ...prev, 
            skills: [
                {
                    ...prev.skills[0], 
                    [field]: [...prev.skills[0][field], newSkill] 
                }
            ]
        }));

        setNewSkill("");
    }}>Add Skill</button>
            <div className='flex flex-wrap gap-2 columns-3'>
                {currentSkills && currentSkills.map((item, index) => (
                    <span 
                        key={index} 
                        className='bg-gray-200 px-2 py-1 rounded-md text-sm'
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export function EditSummary({field, details, setDetails}){
    return(
        <textarea 
            value={details[field]} 
            onChange={(e) => setDetails({...details, [field]: e.target.value})} 
            type="text" 
            placeholder={field} 
            className='h-50 w-full border border-gray-300 rounded-md px-2 py-1' />
    )
}

export function AddEducation({field, setDetails}){
    const [newEducation, setNewEducation] = useState({
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
        cgpa: ""
    });
    return(
        <div className='flex flex-col w-full'>
            <p className='font-bold capitalize mb-2'>{field}</p>
            <input type="text" value={newEducation.degree} onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})} placeholder='Degree' />
            <input type="text" value={newEducation.institution} onChange={(e) => setNewEducation({...newEducation, institution: e.target.value})} placeholder='Institution' />
            <input type="text" value={newEducation.startDate} onChange={(e) => setNewEducation({...newEducation, startDate: e.target.value})} placeholder='Start Date' />
            <input type="text" value={newEducation.endDate} onChange={(e) => setNewEducation({...newEducation, endDate: e.target.value})} placeholder='End Date' />
            <input type="text" value={newEducation.cgpa} onChange={(e) => setNewEducation({...newEducation, cgpa: e.target.value})} placeholder='CGPA' />
            <button onClick={() => setDetails((prev) => {
                return{
                    ...prev, 
                    education: 
                    [
                        ...prev.education, 
                        newEducation
                    ]
                }
            })}>
                Add Education
            </button>
        </div>
    )
}

export function AddAchievements({field, setDetails}){
    const [newAchievement, setNewAchievement] = useState({
        title: "",
        description: "",
        date: ""
    });
    return(
        <div className='flex flex-col w-full'>
            <p className='font-bold capitalize mb-2'>{field}</p>
            <input type="text" value={newAchievement.title} onChange={(e) => setNewAchievement({...newAchievement, title: e.target.value})} placeholder='Title' />
            <textarea className="h-50 w-full" type="text" value={newAchievement.description} onChange={(e) => setNewAchievement({...newAchievement, description: e.target.value})} placeholder='Description' />
            <input type="text" value={newAchievement.date} onChange={(e) => setNewAchievement({...newAchievement, date: e.target.value})} placeholder='Date' />
            <button onClick={() => setDetails((prev) => {
                return{
                    ...prev, 
                    achievements: 
                    [
                        ...prev.achievements, 
                        newAchievement
                    ]
                }
            })}>
                Add Achievements
            </button>
        </div>
    )
}

export function AddProjects({setDetails}){
    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: ""
    });
    return(
        <div className='flex flex-col w-full'>
            <p className='font-bold capitalize mb-2'>Projects</p>
            <input type="text" value={newProject.title} onChange={(e) => setNewProject({...newProject, title: e.target.value})} placeholder='Title' />
            <textarea className="h-50 w-full" type="text" value={newProject.description} onChange={(e) => setNewProject({...newProject, description: e.target.value})} placeholder='Description' />
            <button onClick={() => setDetails((prev) => {
                return{
                    ...prev, 
                    projects: 
                    [
                        ...prev.projects, 
                        newProject
                    ]
                }
            })}>
                Add Project
            </button>
        </div>
    )
}
