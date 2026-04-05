import { useEffect } from 'react';
import { useDetailsContext } from '../DetailsContext'

export function EducationSection({setField}){
    const { details, setDetails } = useDetailsContext();
    return (
        <section className='educationSection border-b-2 border-[#e5e5e5] pb-2 p-4'>
            <p className='font-bold text-lg mb-2 '>EDUCATION</p>
            <ul className='list-disc ml-4 space-y-2'>
                {details.education.map((edu, index) => (
                    <li className='relative' key={index}>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                            <p>{edu.degree}</p>
                            <p className='text-sm italic text-gray-600'>{edu.startDate} - {edu.endDate}</p>
                        </div>
                    <p className='text-sm italic text-gray-600'>{edu.institution}</p>
                    <span className='absolute -top-5 right-0 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full aspect-square ' onClick={() => setDetails({...details, education: details.education.filter((_, i) => i !== index)})}>X</span>
                </li>
                ))}
            </ul>
            <button onClick={() => setField("education")}>Add Education</button>
        </section>
    )
}

export function AchievementsSection({setField}){
    const { details, setDetails } = useDetailsContext();
    return (
        <section className='achievementsSection border-b-2 border-[#e5e5e5] pb-2 p-4'>
            <p className='font-bold text-lg mb-2 '>ACHIEVEMENTS</p>
            <ul className='list-disc ml-4 space-y-2'>
                {details.achievements.map((achievement, index) => (
                    <li className='relative' key={index}>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                            <p>{achievement.title}</p>
                            <p className='text-sm italic text-gray-600'>{achievement.date}</p>
                        </div>
                    <p className='text-sm italic text-gray-600'>{achievement.description}</p>
                    <span className='absolute -top-5 right-0 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full aspect-square ' onClick={() => setDetails({...details, achievements: details.achievements.filter((_, i) => i !== index)})}>X</span>
                </li>
                ))}
            </ul>
            <button onClick={() => setField("achievements")}>Add Achievements</button>
        </section>
    )
}

export function ExperienceSection({setField}){
    const { details, setDetails } = useDetailsContext();
    return (
        <section className='experienceSection border-b-2 border-[#e5e5e5] pb-2 p-4'>
            <p className='font-bold text-lg mb-2 '>EXPERIENCE</p>
            <ul className='list-disc ml-4 space-y-2'>
                {details.experience.map((experience, index) => (
                    <li className='relative' key={index}>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                            <p>{experience.title}</p>
                            <p className='text-sm italic text-gray-600'>{experience.startDate} - {experience.endDate}</p>
                        </div>
                    <p className='text-sm italic text-gray-600'>{experience.company}</p>
                    <span className='absolute -top-5 right-0 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full aspect-square ' onClick={() => setDetails({...details, experience: details.experience.filter((_, i) => i !== index)})}>X</span>
                </li>
                ))}
            </ul>
            <button onClick={() => setField("experience")}>Add Experience</button>
        </section>
    )
}

export function ProjectsSection({setField}){
    const { details, setDetails } = useDetailsContext();
    return (
        <section className='projectsSection border-b-2 border-[#e5e5e5] pb-2 p-4'>
            <p className='font-bold text-lg mb-2 '>PROJECTS</p>
            <ul className='list-disc ml-4 space-y-2'>
                {details.projects.map((project, index) => (
                    <li className='relative' key={index}>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                            <p>{project.title}</p>
                            <p className='text-sm italic text-gray-600'>{project.startDate} - {project.endDate}</p>
                        </div>
                    <p className='text-sm italic text-gray-600'>{project.description}</p>
                    <span className='absolute -top-5 right-0 text-red-500 cursor-pointer text-xs p-1 h-6 w-6 flex justify-center items-center rounded-full aspect-square ' onClick={() => setDetails({...details, projects: details.projects.filter((_, i) => i !== index)})}>X</span>
                </li>
                ))}
            </ul>
            <button onClick={() => setField("projects")}>Add Projects</button>
        </section>
    )
}