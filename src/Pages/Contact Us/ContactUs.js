import { send } from 'emailjs-com';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ContactUs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContact = (data, event) => {
        event.target.reset();

        const userInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            reply_to: data.email,
            subj: data.subject,
            message: data.message,
            phnNumber: data.phnNumber,
        }

        send(
            process.env.REACT_APP_serviceIdEmailJs,
            process.env.REACT_APP_templateIdEmailJsContactUs,
            userInfo,
            process.env.REACT_APP_privateKeyEmailJs,
        )
            .then(res => {
                console.log("Success", res.status, res.text);
                toast.success("Successfully send, Call you shortly");
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='mt-8 mb-12 bg-base-200 p-8 rounded-sm'>
            <div className='mx-auto text-center mb-16'>
                <h2 className='text-center font-teko text-3xl'>Contact Us</h2>
                <p className='text-center font-barlow text-xl'>Contact NR International for Your Coal, Stone, and Onion Needs Today</p>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-8 md:gap-2 font-barlow'>
                <form onSubmit={handleSubmit(handleContact)} className="form-control w-full">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text font-barlow">First Name</span>
                            </label>
                            <input  {...register("firstName", {
                                required: "Please provided your first name",
                            })}
                                type="text" placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs rounded-none " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-barlow">Last Name</span>
                            </label>
                            <input
                                {...register("lastName", {
                                    required: "Please provided your last name",
                                })}
                                type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs  rounded-none " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-barlow">Your Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: "Please provided your email",
                                })}
                                type="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs rounded-none " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-barlow">Phone Number</span>
                            </label>
                            <input
                                {...register("phnNumber", {
                                    required: "Please provided your phone number",
                                })}
                                type="text" placeholder="+88012112121" className="input input-bordered input-primary w-full max-w-xs rounded-none " />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-barlow">Subject</span>
                            </label>
                            <input
                                {...register("subject", {
                                    required: "Please provided subject",
                                })}
                                type="text" placeholder="subject" className="input input-bordered input-primary w-full max-w-xs rounded-none " />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label className="label">
                            <span className="label-text font-barlow">Message</span>
                        </label>
                        <textarea
                            {...register("message", {
                                required: "Please provided your needs",
                            })}
                            className="textarea textarea-bordered textarea-primary h-24 rounded-none w-3/4"
                            placeholder="Write details about your coal/stone/onion needs"
                            name="message">
                        </textarea>
                    </div>
                    <div className="mb-12 mt-6">
                        <button className="font-barlow btn btn-secondary text-black bg-white border-primary hover:text-white hover:btn-primary tracking-widest">Send Message</button>
                    </div>
                </form>

                <div className='flex flex-col gap-12'>
                    <div>
                        <p>Name Of the Entity: NR International</p>
                        <p className='my-1'>Tax id: 001514855-1105</p>
                        <p>Trading Brand Name: General Import Business</p>
                    </div>
                    <div>
                        <p>Address: Shalgaria, Pabna</p>
                        <p className='my-1'>Holding No:1336</p>
                    </div>
                    <div>
                        <p>Call Us: </p>
                        <p className='my-1'>+8801952-277144</p>
                        <p>+8801303-970740</p>
                    </div>
                    <div>
                        <p>Email Us: </p>
                        <p className='my-1'>aislampb@gmail.com</p>
                        <p className='my-1'>nrinternationalonline@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;