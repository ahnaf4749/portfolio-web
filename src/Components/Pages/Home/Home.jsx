import React from 'react';
import pdf from '../../../accest/pdf/MD Khalid hassan sagor.pdf'
import { Typewriter } from 'react-simple-typewriter'



const Home = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse p-8 my-10">
                <img src='https://i.ibb.co/TPwWzRj/7118756-3426526.jpg' className=" lg:w-1/2 rounded-lg" alt='' />
                <div>
                    <h1 className="font-Syne text-5xl font-bold mt-4 custom_font">Hi, I'm MD Khalid Hassan</h1>
                    <div className='mt-2'>
                        <span className='font-extrabold text-3xl custom_font'>A</span> <span className='text-[#008374] font-extrabold text-3xl custom_font'>

                            <Typewriter
                                words={[
                                    'Font End Developer',
                                    'React.Js Developer',
                                    'Mern Stack Developer',
                                    'Web Developer',
                                    'Web Designer'
                                ]}
                                loop={100}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                    <p className="text-lg mt-4 font-semibold">
                        From Bangladesh, Dhaka. I have rich experience in web Development, also I am good at
                        <br />
                        Web Design. I love to talk with you about our unique. I have a strong passion for learning &
                        <br />
                        implementing web technologies and standards.</p>
                    <a className="btn btn-primary bg-gradient-to-r from-[#008374] to-[#0085ad] text-white mt-16" href={pdf} download="Portfolio">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Home;