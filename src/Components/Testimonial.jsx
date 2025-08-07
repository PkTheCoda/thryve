import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-main py-20 font-outfit'>
        <div class="w-full flex flex-col justify-center items-center dark:bg-gray-700 gap-14">

        <section class="dark:bg-gray-800">
            <div class="max-w-6xl px-4 mx-auto text-center lg:px-6">
                <figure class="mx-auto">
                    <svg class="h-20 mx-auto text-gray-800 opacity-30" viewBox="0 0 24 27" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"></path>
                    </svg>
                    <blockquote>
                        <p class="five-title font-medium text-gray-800 dark:text-white leading-normal lg:leading-[3.8rem]">
                            I had a smaller budget, but Thryve{' '}
                            <span className="testimonial-block">exceeded my expectations.</span>. Within just a few days, Pranav and his team created an 
                            amazing homepage for my lawn-mowing business and setup everything from forms to analytics
                            and I already see higher traffic to my site. <span className="testimonial-block">An incredible agency to partner with.</span>
                        </p>
                    </blockquote>
                    <figcaption class="flex flex-col lg:flex-row items-center justify-center mt-6 space-x-3">
                        <img class="w-6 h-6 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile picture"/>
                        <div class="flex flex-col lg:flex-row items-center lg:divide-x-2 divide-gray-400 dark:divide-gray-700">
                            <div class="pr-3 text-lg font-medium text-gray-900 dark:text-white">Blake M.</div>
                            <div class="pl-3 text-lg font-light text-gray-500 dark:text-gray-400">Founder of <a href="https://glmow.netlify.app" target='_blank' className="text-blue-600 underline">Greenleaf Mowing</a></div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>




        <div className='w-full max-w-6xl grid md:grid-cols-2 gap-10 px-8'>

            <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 md:-rotate-1">
                <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                </svg>
                <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-700">
                        Thryve was fantastic to work with! I gave them a few simple ideas for my dog grooming website, 
                        and Pranav and his team turned them into a fun, visually appealing site that captures my brand 
                        perfectly for an affordable price. Would highly recommend for any small business owner.
                    </p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                        <div class="font-display text-base text-slate-900">Anayah R.</div>
                        <div class="mt-1 text-sm text-slate-500">Founder @ <a target='_blank' href="https://pawsandrelax.netlify.app" className='text-blue-400 underline'>Paws and Relax</a></div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" src="https://pawsandrelax.netlify.app/assets/pawsandrelaxlogo-CPFHZbo-.png" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56"/>
                    </div>
                </figcaption>
            </figure>

            <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 md:rotate-1 md:top-4">
                <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                </svg>
                <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-700">
                        Working with Thryve and Pranav was amazing and affordable. He was extremely helpful and receptive to feedback we provided. The website was extremely professional and up to a high standard with the little information we were able to provide him. I would definitely recommend.
                    </p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                        <div class="font-display text-base text-slate-900">Yaw B.</div>
                        <div class="mt-1 text-sm text-slate-500">Founder @ InfoSavvy</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" src="https://infosavvy.netlify.app/assets/infosavvylogo2-DPiCO72Y.png" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56"/>
                    </div>
                </figcaption>
            </figure>

        </div>

        </div>
    </div>
  )
}

export default Testimonial