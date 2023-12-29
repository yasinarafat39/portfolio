import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactMe = () => {

    const form = useRef();

    const handleSendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_ebnrgie', 'template_cnh254d', form.current, 'vJW5VCROXyDsboUkj')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Congratulations! You can Successfully send your message to Easin Arafat.");
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div id='contact' className='mt-28 bg-[#C6DDD3]'  >



            <section className='mt-36 text-center p-6'  >
                <h3 className='text-3xl mb-8 font-semibold'>Contact with me</h3>

                <form ref={form} onSubmit={handleSendEmail} className=' lg:w-1/3 mx-auto'>
                    <div className='mb-8'>

                        <input type="email" name="sender_email" id="" required placeholder='Email Address' className=" focus:border-green-600 inline input w-full lg:max-w-xl" /> <br />

                    </div>

                    <div className='mb-8'>

                        <input type="text" name='subject' required placeholder='Subject' className=" focus:border-green-600 inline input w-full lg:max-w-xl" />

                    </div>

                    <div className='mb-8'>

                        <textarea name="message" id="" required placeholder='Your Message' className="textarea w-full focus:border-green-600 inline"></textarea>

                    </div>

                    <input type='submit' value="Send Message" className='btn bg-green-600 border-none' />
                </form>


            </section>


        </div>
    );
};

export default ContactMe;