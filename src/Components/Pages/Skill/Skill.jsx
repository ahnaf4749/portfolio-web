import React from 'react';

const Skill = () => {

    const name = [
        {
            'value': 95,
            'name': 'HTML'
        },
        {
            'value': 85,
            'name': 'CSS'
        },
        {
            'value': 60,
            'name': 'Javascript'
        },
        {
            'value': 90,
            'name': 'ReactJs'
        },
        {
            'value': 75,
            'name': 'NodeJs'
        },
        {
            'value': 80,
            'name': 'MongoDB'
        },
        {
            'value': 65,
            'name': 'ExpressJs'
        },
    ]

    return (
        <div>
            <p className='text-4xl text-center font-bold my-5 underline  text-[#008374]'>Skill</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    name.map(n => (
                        <div className="card w-full bg-gradient-to-r from-[#008374] to-[#0085ad] text-neutral-content">
                            <div className="card-body items-center text-center">
                                <div className="radial-progress text-[#FF0080] hover:text-white" style={{
                                    "--value": `${n.value}`
                                }}>{n.value}%</div>
                                <div className="card-actions justify-end">
                                    <h1 className='font-bold text-white'>{n.name}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skill;