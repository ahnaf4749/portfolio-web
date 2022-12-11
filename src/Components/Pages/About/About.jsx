import React from 'react';

const About = () => {
    return (
        <div>
            <p>about</p>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-8 my-10">
                    <div>
                        <h1 className="text-5xl font-bold my-4">Your New Smile Starts <br />Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <img src='https://i.ibb.co/TPwWzRj/7118756-3426526.jpg' className=" lg:w-1/2 rounded-lg" alt='' />
                </div>
            </div>
        </div>
    );
};

export default About;