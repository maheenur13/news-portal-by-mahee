import React from 'react';
import { useForm } from "react-hook-form";
import './ContactForm.css';

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example"));
    return (
        <div className="mt-5">
            <h1 style={{fontSize:'1.5em'}} className="text-center mt-5">Any Feedback?</h1>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Your Name or Email" {...register("example")} />

                <textarea {...register("exampleRequired", { required: true })} placeholder="Enter Your Message" ></textarea>
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default ContactForm;