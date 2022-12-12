import React from 'react';

const About = () => {
    return (
        <div id='about' className='my-16'>
            <h2 className='jost_fonts my-5 text-[#008374] text-center text-5xl font-bold underline'>About Me</h2>
            <div className='max-w-screen-xl mx-5 mb-12'>
                <div className="hero">
                    <div className="hero-content flex-col p-0 lg:py-16 lg:flex-row-reverse">
                        <img src='https://i.ibb.co/TPwWzRj/7118756-3426526.jpg' className="rounded-lg lg:w-1/2" alt='' />
                        <div>
                            <h1 className="text-3xl jost_fonts font-bold ">I'm Khalid hassan, a Creative Web Designer and Web Developer</h1>
                            <p className="pt-6 font-bold poppies_fonts">I am a Front-End Developer based in the Bangladesh and I have been building noteworthy Web Developer and websites for years, which comply with the latest developer trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and idea faster.</p>
                            <div className="divider h-0.5 bg-[#D0D1D1]"></div>
                            <div className='flex justify-between jost_fonts mt-8'>
                                <div>
                                    <p><span className='font-semibold'>Name:</span> MD Khalid Hassan Sagor</p>
                                </div>
                                <div>
                                    <p><span className='font-semibold'>Email:</span> ahnafsagor12@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex justify-between jost_fonts mb-12'>
                                <div>
                                    <p><span className='font-semibold'>Age:</span> 21 Years</p>
                                </div>
                                <div>
                                    <p><span className='font-semibold'>From:</span> Rangpur, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;