import { useEffect } from 'react';
import { useDetailsContext } from '../DetailsContext'

export function Header({details ,setField}){
    return (
        <header className='border-b-2 border-[#e5e5e5] px-6 py-4'>
            <h1 onClick={() => setField("name")} className='font-bold text-3xl mb-3 cursor-pointer capitalize'>
                {details.name}
            </h1>
            
            <div className='grid grid-cols-2 gap-x-10 gap-y-1 text-sm'>
                <span className='font-medium cursor-pointer' onClick={() => setField("role")}>{details.role}</span>
                <span onClick={() => setField("email")} className='text-right cursor-pointer'>Email: {details.email}</span>
                
                <span onClick={() => setField("linkedin")} className="cursor-pointer">LinkedIn: <a href={details.linkedin} target="_blank" className='text-blue-600 underline text-xs'>{details.linkedin}</a></span>
                <span onClick={() => setField("phone")} className='text-right cursor-pointer'>Phone: {details.phone}</span>
                
                <span onClick={() => setField("github")} className="cursor-pointer">GitHub: <a href={details.github} target="_blank" className='text-blue-600 underline text-xs'>{details.github}</a></span>
                <span onClick={() => setField("address")} className='text-right cursor-pointer'>Address: {details.address}</span>
            </div>
        </header>
    )
}

export function SummarySection({details, setField}){
    return (
        <section className='border-b-2 border-[#e5e5e5] p-4 pb-2'>
            <p className='font-bold text-lg mb-1'>SUMMARY</p>
            <p className="cursor-pointer" onClick={() => setField("summary")}>{details.summary}</p>
        </section>
    )
}

export function TechnicalSkillsSection({details, setField}){
    return (
        <section className='border-b-2 border-[#e5e5e5] p-4 pb-2'>
            <p className='font-bold text-lg mb-1'>TECHNICAL SKILLS</p>
            <p className='cursor-pointer' onClick={() => setField("languages")}>Languages: {details.skills[0].languages.join(", ")}</p>
            <p className='cursor-pointer' onClick={() => setField("frameworks")}>Frameworks: {details.skills[0].frameworks.join(", ")}</p>
            <p className='cursor-pointer' onClick={() => setField("tools")}>Tools: {details.skills[0].tools.join(", ")}</p>
        </section>
    )
}

export function EducationSection({details, setField}){
    return (
        <section className='educationSection border-b-2 border-[#e5e5e5] p-4 pb-2'>
            <p className='font-bold text-lg mb-2'>EDUCATION</p>
            <ul className='list-disc ml-5 space-y-2'>
                {details.education.map((edu, index) => (
                    <li className='relative' key={index}>
                        <div className='flex justify-between items-start'>
                            <p className="font-semibold">{edu.degree}</p>
                            <p className='text-sm italic text-gray-600'>{edu.startDate} - {edu.endDate}</p>
                        </div>
                        <p className='text-sm italic text-gray-600'>{edu.institution}</p>
                        <span className='absolute -top-2 -right-6 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full' onClick={() => setDetails({...details, education: details.education.filter((_, i) => i !== index)})}>X</span>
                    </li>
                ))}
            </ul>
            <button className="mt-3 text-sm text-blue-500" onClick={() => setField("education")}>+ Add Education</button>
        </section>
    )
}

export function AchievementsSection({details, setField}){
    return (
        <section className='achievementsSection border-b-2 border-[#e5e5e5] p-4 pb-2'>
            <p className='font-bold text-lg mb-2'>ACHIEVEMENTS</p>
            <ul className='list-disc ml-5 space-y-1'>
                {details.achievements.map((achievement, index) => (
                    <li className='relative' key={index}>
                        <div className='flex justify-between items-start'>
                            <p className="font-semibold">{achievement.title}</p>
                            <p className='text-sm italic text-gray-600'>{achievement.date}</p>
                        </div>
                        <p className='text-sm text-gray-700'>{achievement.description}</p>
                        <span className='absolute -top-2 -right-6 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full' onClick={() => setDetails({...details, achievements: details.achievements.filter((_, i) => i !== index)})}>X</span>
                    </li>
                ))}
            </ul>
            <button className="mt-3 text-sm text-blue-500" onClick={() => setField("achievements")}>+ Add Achievement</button>
        </section>
    )
}

export function ExperienceSection({details, setField}){
    return (
        <section className='experienceSection border-b-2 border-[#e5e5e5] p-4 pb-2'>
            <p className='font-bold text-lg mb-2'>EXPERIENCE</p>
            <ul className='list-disc ml-5 space-y-2'>
                {details.experience.map((experience, index) => (
                    <li className='relative' key={index}>
                        <div className='flex justify-between items-start'>
                            <p className="font-semibold">{experience.title}</p>
                            <p className='text-sm italic text-gray-600'>{experience.startDate} - {experience.endDate}</p>
                        </div>
                        <p className='text-sm italic text-gray-600'>{experience.company}</p>
                        <span className='absolute -top-2 -right-6 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full' onClick={() => setDetails({...details, experience: details.experience.filter((_, i) => i !== index)})}>X</span>
                    </li>
                ))}
            </ul>
            <button className="mt-3 text-sm text-blue-500" onClick={() => setField("experience")}>+ Add Experience</button>
        </section>
    )
}

export function ProjectsSection({details, setField}){
    return (
        <section className='projectsSection border-b-2 border-[#e5e5e5] p-4 pb-2'>
            <p className='font-bold text-lg mb-2'>PROJECTS</p>
            <ul className='list-disc ml-5 space-y-2'>
                {details.projects.map((project, index) => (
                    <li className='relative' key={index}>
                        <div className='flex justify-between items-start'>
                            <p className="font-semibold">{project.title}</p>
                            <p className='text-sm italic text-gray-600'>{project.startDate} - {project.endDate}</p>
                        </div>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                        <span className='absolute -top-2 -right-6 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full' onClick={() => setDetails({...details, projects: details.projects.filter((_, i) => i !== index)})}>X</span>
                    </li>
                ))}
            </ul>
            <button className="mt-3 text-sm text-blue-500" onClick={() => setField("projects")}>+ Add Project</button>
        </section>
    )
}