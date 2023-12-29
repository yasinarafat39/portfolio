
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {

    const projectById = useLoaderData();

    const { projectName, clientSiteCode, date, description, features, id, liveSite, picture, serverSiteCode, subtitle, technology } = projectById;

    return (
        <div className='lg:flex m-6 mt-24'>


            <div className='lg:mr-8 mb-11'>
                <img src={picture} alt="" />
            </div>

            <div>
                <div className='lg:flex   justify-between items-center mb-5'>
                    <h2 className='text-3xl font-bold lg:mb-0 mb-4'>{projectName}</h2>
                    <p className='text-xl'>{date}</p>
                </div>

                <p className=''>{description}</p>

                <div className='flex justify-between items-center mt-8'>
                    <a href={liveSite} target="_blank" className="btn btn-sm bg-green-600 border-none">Live Website</a>
                    <a href={clientSiteCode} target="_blank" className="btn btn-sm bg-green-600 border-none">Client <i className=" ml-2 ri-code-line"></i></a>
                    <a href={serverSiteCode} target="_blank" className="btn btn-sm bg-green-600 border-none">Server <i className=" ml-2 ri-code-line"></i></a>
                </div>

                <h2 className='text-2xl font-bold mt-5 '>Features</h2>

                {
                    features.map((feature, i) => <p
                        key={i}
                    >
                        <i className="ri-arrow-right-s-fill"></i> {feature}
                    </p>)
                }

                <h2 className='text-2xl font-bold mt-5 mb-5'>Technology</h2>

                {
                    technology.map((tech, i) => <button

                        key={i}
                        className="btn mr-3 mb-3"
                    >
                        {tech}
                    </button>)
                }

            </div>


        </div>
    );
};

export default ProjectDetails;