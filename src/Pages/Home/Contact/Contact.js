import React from 'react';
import contact from "../../../Images/contact.png";
import PrimaryButton from '../../../Button/PrimaryButton/PrimaryButton';
import { useForm } from 'react-hook-form';
import { send } from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContact = (data, event) => {
        event.target.reset();
        const userInfo = {
            name: data.name,
            reply_to: data.email,
            subj: data.subject,
            message: data.message
        }
        send(
            process.env.REACT_APP_serviceIdEmailJs,
            process.env.REACT_APP_templateIdEmailJs,
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
        <div className='my-32'>
            <h2 className='text-center font-teko font-semibold text-4xl text-primary mb-6'>Stay Connected with us</h2>
            <hr className='text-center w-64 mx-auto mb-12' />
            <section className="flex flex-col md:items-center lg:flex-row container mx-auto " id="contact">
                <div className="text-center lg:text-left basis-2/4 mx-5">
                    <img
                        className="hue-rotate-0 justify-center rounded-md shadow-gray-400 mb-6 w-full" src={contact} alt=""
                    />
                </div>

                <form onSubmit={handleSubmit(handleContact)}>
                    <div className="form-control mt-8">
                        <div className="flex gap-5">
                            <input
                                {...register("name", {
                                    required: "Please provided your Name",
                                })}
                                type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs rounded-none " />
                            <input
                                {...register("email", {
                                    required: "Please provided your email",
                                })}
                                type="email" name="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs rounded-none" />
                        </div>
                        <input
                            {...register("subject", {
                                required: "Please provided your subject",
                            })}
                            type="text" name="subject" placeholder="Subject" className="input input-bordered input-primary min-w-full max-w-xs mt-6 rounded-none" />
                        <div className="form-control mt-6">
                            <textarea
                                {...register("message", {
                                    required: "Write details about your coal/stone/onion needs",
                                })}
                                className="textarea textarea-bordered textarea-primary h-24 rounded-none"
                                placeholder="Write details about your coal/stone/onion needs"
                                name="message">

                            </textarea>
                        </div>
                    </div>

                    <div className="mb-12 mt-6">
                        <button><PrimaryButton>Send Message</PrimaryButton></button>
                    </div>
                </form>
            </section>
        </div>

    );
};

export default Contact;