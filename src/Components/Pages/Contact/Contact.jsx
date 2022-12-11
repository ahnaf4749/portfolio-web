import React from 'react';

const Contact = () => {
    return (
        <div className='h-[550px]'>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <h2 className='poppies_fonts font-bold text-[#008374]'>Feel free to contact me anytime?</h2>
                    <h2 className='jost_fonts text-6xl font-bold text-[#D0D1D1] mt-2'>Get in Touch</h2>
                </div>
            </div>
            <div id='contact' className='flex justify-center items-center mt-6 mb-96'>
                <div className='w-96 p-7'>
                    <form
                        action="https://formspree.io/f/meqdyndo"
                        method="POST"
                    >
                        <div className="w-full mb-4">
                            <input required name='name' type="name" placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className="w-full mb-4">
                            <input required name='email' type="email" placeholder="Your email" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className="w-full mb-4">
                            <input required name='subject' type="subject" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full">
                            <textarea required name='message' className="textarea textarea-accent" placeholder="Message"></textarea>
                            <label className="label">
                            </label>
                        </div>
                        <div>
                            <button className='border-2 rounded-md border-[#008374] h-12 bg-transparent outline-none focus:border-white w-full font-semibold'>Contact Me</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;