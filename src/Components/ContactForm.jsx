import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnqeeokg");
  if (state.succeeded) {
    return (<div className='w-full flex flex-col gap-y-4 py-20 bg-[#eeeadd] text-main five-title text-center font-outfit'>
        Thank you for your message!
        <p className='text-xl'>We'll get back to you within 24 hours!</p>
    </div>);
  }

  return (
    <section className="bg-[#eeeadd] font-outfit dark:bg-slate-800 relative z-20" id="contact">
      <svg xmlns="http://www.w3.org/2000/svg" className='-bottom-2 absolute -z-10' viewBox="0 0 1440 320">
        <path fill="#c0bcb0" fillOpacity="1" d="M0,128L34.3,144C68.6,160,137,192,206,197.3C274.3,203,343,181,411,181.3C480,181,549,203,617,229.3C685.7,256,754,288,823,261.3C891.4,235,960,149,1029,117.3C1097.1,85,1166,107,1234,133.3C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 z-50">
        <div className="mb-4">
          <div className="max-w-3xl text-center sm:text-center md:mx-auto">
            <p className="text-base font-semibold uppercase tracking-wide text-main dark:text-blue-200">
              Contact Us
            </p>
            <h2 className="font-heading mb-2 font-semibold tracking-tight text-main dark:text-white six-title">
              So Anyways, <span className="block opacity-70">Let's Get in Touch</span>
            </h2>
            <a href='/contact' target='_blank' className="mx-auto max-w-3xl underline text-xl text-gray-600 dark:text-slate-400">
              Book a Call instead
            </a>
          </div>
        </div>

        <div className="flex items-stretch justify-center">
          <div className="w-full sm:w-3/4 md:w-1/2">
            <div className="max-w-6xl p-5 md:p-12 rounded-md bg-secondary shadow-md" id="form">
              <h2 className="mb-4 text-2xl font-bold text-white">Let's boost your business. <span className="opacity-80">Today.</span></h2>
              <form onSubmit={handleSubmit} id="contactForm" className='m-0'>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <input type="hidden" name="form-name" value="contactForm" />

                    <div className="mx-0 mb-1 sm:mb-4">
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" 
                        required 
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div className="mx-0 mb-1 sm:mb-4">
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Your email address" 
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" 
                        required 
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div className="mx-0 mb-1 sm:mb-4">
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        placeholder="Your Company" 
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" 
                        required 
                      />
                      <ValidationError 
                        prefix="Company" 
                        field="company"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  

                  <div className="mx-0 mb-1 sm:mb-4">
                    <textarea 
                      id="message" 
                      name="message" 
                      cols="30" 
                      rows="5" 
                      placeholder="Write your message..." 
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" 
                      required
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-main text-main px-6 py-3 font-xl rounded-md sm:mb-0" disabled={state.submitting}>
                    Send Message
                  </button>
                </div>
              </form>
              {state.succeeded && (
                <p className="text-white mt-4">Thanks for your message!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
