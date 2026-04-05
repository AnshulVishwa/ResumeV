import React from 'react'
import { useDetailsContext } from './DetailsContext'
import { EditContactInfo, EditSkills, EditSummary, AddEducation, AddAchievements, AddProjects } from './Utilities/Controllers'

function EditSection({ field }) {
    const { details, setDetails } = useDetailsContext();

    return (
        <div className='flex flex-col justify-between items-center bg-white fixed left-0 m-auto p-5 rounded-xl shadow-lg'>
            <h1 className='text-2xl font-bold mb-2'>Edit {field.toUpperCase()} Section.</h1>

            {(() => {
                switch (field) {
                    case "name":
                    case "email":
                    case "phone":
                    case "linkedin":
                    case "github":
                    case "portfolio":
                    case "address":
                    case "role":
                        return <EditContactInfo field={field} details={details} setDetails={setDetails} />;

                    case "languages":
                    case "frameworks":
                    case "tools":
                        return <EditSkills field={field} details={details} setDetails={setDetails} />;

                    case "summary":
                        return <EditSummary field={field} details={details} setDetails={setDetails} />;

                    case "education":
                        return <AddEducation field={field} setDetails={setDetails} />;

                    case "achievements":
                        return <AddAchievements field={field} setDetails={setDetails} />;

                    case "projects":
                        return <AddProjects setDetails={setDetails} />;

                    default:
                        return <p>Unknown field: {field}</p>;
                }
            })()}
        </div>
    );
}

export default EditSection;