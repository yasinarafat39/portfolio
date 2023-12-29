import React, { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';


const MyProjects = () => {

    const navigate = useNavigate();


    // const handleNavigateToProjectDetails = (projectId) => {

    //     // Navigate to Project details
    //     navigate(`/details/${projectId}`);
    // }


    //---------- Data of project -----------------
    const projects = [
        {
            "id": 1,
            "projectName": "Collected Mobile",
            "picture": "https://i.ibb.co/47srRnY/Collected-Mobile1.jpg",
            "subtitle": "Used Mobile resale marketplace",
            "date": "November-2022",
            "description": "Collected Mobile is resale marketplace. It maintain Buyer Seller and Admin user technology. Buyers can buy their favorite mobile from Collected Mobile. And sellers can sell their used mobile phones.",
            "liveSite": "https://collected-mobile.web.app/",
            "clientSiteCode": "https://github.com/yasinarafat39/assignment-12_collected_mobile_client_site",
            "serverSiteCode": "https://github.com/yasinarafat39/assignment-12_collected_mobile_server_site",
            "features": [
                "Admin Dashboard",
                "Crud Operation",
                "Authentication With JWT"
            ],
            "technology": [
                "React.js",
                "React Router Dom",
                "Tailwind CSS",
                "Firebase",
                "MongoDB",
                "Node.js",
                "Express.js"
            ]
        },
        {
            "id": 2,
            "projectName": "MM Photographer",
            "picture": "https://i.ibb.co/27bgrnr/MM-Photographer.jpg",
            "subtitle": "Moment Maker Photographer is personal and event photography service provider.",
            "date": "November-2022",
            "description": "Moment Maker Photographer is a Photography service provider. It provide many event and personal photography service.",
            "liveSite": "https://mm-photographer.web.app/",
            "clientSiteCode": "https://github.com/yasinarafat39/assignment-11_moment_maker_photographer",
            "serverSiteCode": "https://github.com/yasinarafat39/assignment-11_moment_maker_photographer_server_site",
            "features": [
                "Users Review",
                "User Authentication",
                "Crud Operation"
            ],
            "technology": [
                "Tailwind CSS",
                "React.js",
                "React Router Dom",
                "Firebase",
                "JWT",
                "Node.js",
                "MongoDB",
                "Express.js"
            ]
        },
        {
            "id": 3,
            "projectName": "Learn For Tomorrow",
            "picture": " https://i.ibb.co/DWf3T8j/learn-for-tomorrow1.jpg",
            "subtitle": "Educational Website",
            "date": "October-2022",
            "description": "Learn For Tomorrow is Online Education Website. Students can red and download their favorite courses from Learn For Tomorrow. User may Sign in at Learn For Tomorrow.",
            "liveSite": "https://learn-for-tomorrow.web.app/",
            "clientSiteCode": "https://github.com/yasinarafat39/assignment-10_learn_for_tomorrow_client_site",
            "serverSiteCode": "https://github.com/yasinarafat39/assignment-10_learn_for_tomorrow_server_site",
            "features": [
                "Checkout Premium",
                "Rating",
                "Review"
            ],
            "technology": [
                "React.js",
                "React Router Dom",
                "Tailwind CSS",
                "Firebase",
                "Node.js",
                "MongoDB"
            ]
        }
    ]
    //--------------------------------------------

    return (
        <div id='projects' className='projects mt-24'>
            <h2 className='text-center mb-16 font-semibold text-5xl text-green-600'>My Projects</h2>


            <div className=" text-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">

                {
                    projects.map(project => <div key={project.id} className="card bg-base-100 shadow-xl">
                        <figure><img src={project.picture} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.subtitle}</p>
                            <div className="card-actions justify-between">
                                <a href={project.liveSite} target="_blank" className="btn btn-sm  bg-green-600 border-none">Visit Now</a>
                                <Link to={`/details/${project.id}`} className="btn btn-sm bg-green-600 border-none">Details</Link>
                                {/* <button onClick={handleNavigateToProjectDetails(project.id)} className="btn btn-sm bg-green-600 border-none">Details2222</button> */}
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </div>
    );
};

export default MyProjects;