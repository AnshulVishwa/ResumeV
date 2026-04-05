import { createContext, useContext, useState } from "react";

export const DetailsContext = createContext();

function DetailsProvider({children}){
    const [details, setDetails] = useState({
        name: "Anshul Vishwakarma",
        email: "anshulkb123456@gmail.com",
        phone: "+91-9165872964",
        role : "Full Stack Developer",
        address: "Dewas, M.P.",
        linkedin: "https://linkedin.com/in/yourprofile", 
        github: "https://github.com/yourusername",
        portfolio: "https://yourportfolio.com",
        summary: "Passionate and detail-oriented software engineer with a strong foundation in computer science and a proven ability to deliver high-quality software solutions. Eager to leverage technical skills and problem-solving abilities to contribute to innovative projects and drive meaningful impact.",
        skills: [
            {
                languages:["Python","Java","C++","JavaScript","HTML","CSS"],
                frameworks:["React","Node.js","Express","Django","Flask"],
                tools:["Git","GitHub","Docker","Postman","VS Code","Jupyter Notebook"]
            }
        ],
        education: [{
                degree:"Bachelor of Technology",
                institution:"Indore Institute of Science and Technology, Indore",
                startDate:"August 2023",
                endDate:"Present",
                cgpa:"8.2"
            }],
        experience: [{title:"Software Engineer",company:"TCS",startDate:"August 2023",endDate:"Present",description:""}],
        achievements: [{title:"Participated in Hackathon",date:"June 2024",description:"We built an app to help farmers to connect with the local markets and sell their produce directly to the consumers. We used React, Node.js, Express, and MongoDB to build the app. We also used Firebase to authenticate users and store their data. The app was a success and helped farmers to increase their income by 20%."},{title:"Participated in Hackathon",date:"August 2024",description:"We built a software that encounters the problem of students to find the best colleges for themselves. We used React, Node.js, Express, and MongoDB to build the software. We also used Firebase to authenticate users and store their data. The software was a success and helped students to find the best colleges for themselves."}],
        projects: [{title:"Project 1",description:"Description 1",startDate:"August 2023",endDate:"Present"},{title:"Project 2",description:"Description 2",startDate:"August 2023",endDate:"Present"}]
    });

    return (
        <DetailsContext.Provider value={{ details, setDetails }}>
            {children}
        </DetailsContext.Provider>
    );
}

export const useDetailsContext = () => useContext(DetailsContext);

export default DetailsProvider;