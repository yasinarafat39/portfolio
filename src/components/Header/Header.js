import React, { useRef, useEffect } from 'react';
import headerImg from '../../assets/headerImg.png';
import './Header.css'



import { init } from 'ityped';

const Header = () => {

    const textFieldRef = useRef(null);

    let isLoading = true;


    useEffect(() => {

        if (textFieldRef.current && isLoading) {
            isLoading = false;
            init(textFieldRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: [
                    'Easin Arafat',
                    'a Web Developer',
                ]
            })
        }


    }, [])


    return (
        <section className="bg-gray-200 text-gray-800">
            <div className="container flex flex-col justify-center mx-auto p-6 sm:py-12 lg:py-24 md:flex-row lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center sm:justify-start p-4 text-center sm:text-left md:text-left rounded-sm  lg:text-left">
                    <h1 className="text-green-600    lg:text-5xl md:text-4xl font-bold leading-none text-4xl ">
                        <span className='text-2xl text-black'>Hi</span>
                        <br /> <span className="text-black text-2xl lg:text-5xl">I'm
                        </span> <span className='text-2xl lg:text-5xl' ref={textFieldRef}> </span>

                    </h1>
                    <p className="mt-6 mb-8  sm:mb-12 leading-relaxed"> Welcome to my world! <br /> Basically, I am a Front-end Web Developer.
                        I have good knowledge <br /> and one year coding experience of Front-end technology like HTML, <br /> CSS,
                        Bootstrap, Tailwind, Javascript, and React.js
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center md:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                        <a href="https://drive.google.com/file/d/1n_fMZ6rkLCAShT-Ic2hyL14bOtDWQx3W/view?usp=sharing" target="_blank" className=" flex justify-center items-center px-4 lg:px-8 lg:py-3 py-1 text-lg font-semibold rounded bg-green-600 text-gray-50">
                            <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z" fill="rgba(255,255,255,1)" /></svg></span>
                            Resume
                        </a>
                        <a href="https://www.linkedin.com/in/easin-arafat-easin/" target="_blank" className=" flex justify-center items-center px-4 lg:px-8 lg:py-3 py-1 text-lg font-semibold border rounded border-gray-800">
                            <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z" fill="rgba(0,0,0,1)" /></svg></span>
                            Hire me
                        </a>

                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-96 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={headerImg} alt="" className="object-contain h-[500px] md:h-[450px] sm:h-80 lg:h-[500px] xl:h-112 2xl:h-128" />
                </div>
            </div>

        </section>
    );
};

export default Header;