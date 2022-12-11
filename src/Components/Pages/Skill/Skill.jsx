import React from 'react';

const Skill = () => {

    const name = [
        {
            'value': 95,
            'name': 'HTML'
        },
        {
            'value': 58,
            'name': 'CSS'
        },
        {
            'value': 75,
            'name': 'Javascript'
        },
        {
            'value': 75,
            'name': 'ReactJs'
        },
        {
            'value': 75,
            'name': 'NodeJs'
        },
        {
            'value': 75,
            'name': 'MongoDB'
        },
        {
            'value': 75,
            'name': 'ExpressJs'
        },
    ]

    return (
        <div>
            <p>Skill</p>
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