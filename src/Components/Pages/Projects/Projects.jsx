import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

    const { data: MyProjects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: () => fetch('https://protfoilo-web-servar.vercel.app/projects')
            .then(res => res.json())

    })
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
                                <p>{projects.name}</p>
                            </div>
                            <div>
                                <Link to={`/projects/${projects.id}`}>
                                    <p>Details</p>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;