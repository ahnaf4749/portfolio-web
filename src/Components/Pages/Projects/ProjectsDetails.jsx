import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectsDetails = () => {
    const products = useLoaderData()
    console.log(products);
    const { name, img1, img2, img3, details, live_site_link, client_site_link, server_site_link } = products[0]
    return (
        <div>
            <p className='text-center text-4xl font-bold'>Project name : {name}</p>
            <div className='flex'>
                <div className='my-5'>
                    {
                        details.map(d => <li className='my-2 font-semibold'>{d}</li>)
                    }
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <a className='btn btn-outline btn-info mr-10' href={live_site_link}>Live Site Link</a>
                    <a className='btn btn-outline btn-info mr-10' href={client_site_link}>Client Code Link</a>
                    <a className='btn btn-outline btn-info' href={server_site_link}>Server Code Link</a>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10'>
                <div>
                    <img src={img1} alt="" className="object-cover w-3/2 mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                </div>
                <div>
                    <img src={img2} alt="" className="object-cover w-3/2 mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                </div>
                <div>
                    <img src={img3} alt="" className="object-cover w-3/2 mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;