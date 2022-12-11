import React from 'react';
import pdf from '../../../accest/pdf/MD Khalid hassan sagor.pdf'



const Home = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse p-8 my-10">
                <img src='https://i.ibb.co/TPwWzRj/7118756-3426526.jpg' className=" lg:w-1/2 rounded-lg" alt='' />
                <div>
                    <h1 className="text-5xl font-bold my-4">Hi I am <br />Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <a className="btn btn-primary bg-gradient-to-r from-[#008374] to-[#0085ad] text-white mt-16" href={pdf} download="Portfolio">Download Resume</a>
                    {/* <button className="btn btn-primary bg-gradient-to-r from-[#008374] to-[#0085ad] text-white my-7">Download Resume</button> */}
                </div>
            </div>
        </div>
    );
};

export default Home;