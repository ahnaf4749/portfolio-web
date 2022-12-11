import React from 'react';
import img1 from '../../../accest/image/Screenshot_1.png'
import img2 from '../../../accest/image/Screenshot_2.png'
import img3 from '../../../accest/image/Screenshot_3.png'

const Projects = () => {

    const MyProjects = [
        {
            "img": img1,
            "name": "Swap",
            "live_site_lik": "https://resal-jone.web.app/"
        },
        {
            "img": img2,
            "name": "Master Study",
            "live_site_lik": "https://assaienment-11.web.app/"
        },
        {
            "img": img3,
            "name": "Code School",
            "live_site_lik": "https://assaienment-10.web.app/"
        },
    ]

    return (
        <div id='projects' className='max-w-screen-xl mx-auto my-16'>
            <p className='text-lg font-bold text-center text-[#008374] poppies_fonts'>Showcasing some of my best work</p>
            <h1 className='jost_fonts mb-16 text-[#D0D1D1] text-center text-6xl'>Recent Work.</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                {
                    MyProjects?.map((projects, i) => <div
                        key={i}
                        className="rounded-md shadow-xl image-full">
                        <figure className='flex justify-center items-center '><img className='w-full h-48' src={projects.img} alt="" /></figure>
                        <div className="card-actions text-lg font-semibold justify-around mt-2 text-white w-full bg-[#008374]">
                            <div>
                                <p>Swap</p>
                            </div>
                            <div>
                                <a href={projects.live_site_lik} target="_blank" rel="noreferrer">Live Site Link</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;