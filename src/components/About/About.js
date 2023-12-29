

import React from 'react';
import profileMe from '../../assets/profile_me.jpg';

import js from '../.././assets/Skills Icon/icons8-javascript-240.png';
import react from '../.././assets/Skills Icon/icons8-react-native-240.png';
import tailwind from '../.././assets/Skills Icon/icons8-tailwindcss-240.png';
import bootstrap from '../../assets/Skills Icon/icons8-bootstrap-240.png';
import html from '../../assets/Skills Icon/icons8-html-5-240.png';
import css from '../../assets/Skills Icon/icons8-css3-240.png';
import nodejs from '../../assets/Skills Icon/icons8-node-js-240.png';
import mongoDb from '../../assets/Skills Icon/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png';
import firebase from '../../assets/Skills Icon/icons8-google-firebase-console-240.png';
import expressJS from '../../assets/Skills Icon/icons8-express-js-240.png';
import jsonWebToken from '../../assets/Skills Icon/icons8-json-web-token-240.png';


const About = () => {


    const skillsIcon = [
        {
            icon: js,
            iconName: "JavaScript"
        },
        {
            icon: react,
            iconName: "React.js"
        },
        {
            icon: tailwind,
            iconName: "Tailwind CSS"
        },
        {
            icon: bootstrap,
            iconName: "Bootstrap CSS"
        },
        {
            icon: html,
            iconName: "HTML"
        },
        {
            icon: css,
            iconName: "CSS"
        },
        {
            icon: nodejs,
            iconName: "Node.js"
        },
        {
            icon: expressJS,
            iconName: "Express.js"
        },
        {
            icon: mongoDb,
            iconName: "MongoDB"
        },
        {
            icon: firebase,
            iconName: "Firebase"
        },
        {
            icon: jsonWebToken,
            iconName: "Json Web Token"
        }
    ]

    return (
        <section className='mt-32 lg:m-24 m-6' id='about'>

            <div className=' mb-10'>
                <h2 className=' divider text-4xl font-bold  mb-16'> About Me</h2>
            </div>


            <div className='text-gray-800 grid grid-cols-1 lg:grid-cols-3 lg:gap-12'>

                <div className='lg:col-span-1'>
                    <img className=' rounded-lg border-green-300' src={profileMe} alt="" />
                </div>

                <div className='col-span-2'>
                    <p className='lg:mt-0 mt-8'> HELLO, I AM</p>
                    <h2 className='text-4xl font-bold my-4 text-green-600'>EASIN ARAFAT</h2>
                    <h4 className='text-xl font-semibold mb-3'>FRONT-END WEB DEVELOPER</h4>
                    <p className='text-xl'>I enjoy the challenge of creating complex applications and experiences that are interactive, informative and accessible. I strive to learn and improve my skills on the latest web technologies, and challenge myself every day to become a more knowledgeable and effective developer.</p>
                    <p className='text-xl mt-4'>I'm excited to make the leap and continue refining my skills with the right company. Download my Resume, or Contact with me form below or you can check me out at social Link also.</p>

                    <div className="mt-6 flex flex-col space-y-4 sm:items-center sm:justify-center md:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a href="https://drive.google.com/file/d/1uEY_YBqZTacquyqJcsL6rYkTs8QjgLsR/view?usp=sharing" target="_blank" className=" flex justify-center items-center px-4 lg:px-8 lg:py-3 py-1 text-lg font-semibold rounded bg-green-600 text-gray-50">
                            <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z" fill="rgba(255,255,255,1)" /></svg></span>
                            Resume</a>
                        <a href="#contact" className=" flex justify-center items-center px-4 lg:px-8 lg:py-3 py-1 text-lg font-semibold border rounded border-gray-800">
                            <span className='mr-2'></span>
                            Contact With Me</a>
                    </div>

                </div>

            </div>


            <section className='my-24'>

                <section className='grid lg:grid-cols-2 grid-cols-1 gap-8'>

                    {/* My Skills */}
                    <div className=''>
                        <h2 className=' my-6 text-4xl text-center mb-10 font-bold divider'>My Skills</h2>

                        <div>
                            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6'>
                                {
                                    skillsIcon.map((icon, i) => <p
                                        key={i}
                                        className="flex flex-col justify-center items-center"
                                    >
                                        <img src={icon.icon} alt="" width="50" height="50" />
                                        <p className='mt-0 text-center'>{icon.iconName}</p>
                                    </p>)
                                }
                            </div>
                        </div>

                        <div>

                        </div>


                    </div>

                    {/* Education */}
                    <div>

                        <h2 className=' my-6 text-4xl   mb-10 font-bold divider'>Education</h2>

                        <div>



                            <ul className="steps steps-vertical lg:hidden md:hidden ">
                                <li className="mb-10"><h2 className='font-semibold'>
                                    <span className='text-2xl font-bold text-green-600'>Academic: </span> <br />
                                    <span className=''>BBS (Bachelor of Business Study) </span> <br />
                                    <span>Gurudayal Govt. College</span> <br />
                                    <span>Kishoreganj Dhaka</span>
                                </h2>
                                </li>
                                <li className=""> <h2 className=''>
                                    <span className='text-2xl font-bold text-green-600'>Professional Training: </span> <br />
                                    <span className='font-semibold '>Complete Web Development Course<br /> Programming Hero</span> </h2>
                                </li>

                            </ul>

                            <div className='hidden md:block lg:block'>
                                <ul className="steps">
                                    <li className="step step-neutral"><h2 className='font-semibold'>
                                        <span className='text-2xl font-bold text-green-600'>Academic: </span> <br />
                                        <span className=''>BBS (Bachelor of Business Study) </span>
                                        <span>Gurudayal Govt. College,</span> <br />
                                        <span>Kishoreganj Dhaka</span>
                                    </h2>
                                    </li>
                                    <li className="step  step-neutral"> <h2 className=''>
                                        <span className='text-2xl font-bold text-green-600'>Professional Training: </span> <br />
                                        <span className='font-semibold '>Complete Web Development Course from, <br /> Programming Hero</span> </h2>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </section>


            </section>
        </section>
    );
};

export default About;