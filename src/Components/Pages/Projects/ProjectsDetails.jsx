import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectsDetails = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <p>details</p>
        </div>
    );
};

export default ProjectsDetails;