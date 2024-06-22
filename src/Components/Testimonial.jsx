import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-main py-20 font-outfit'>
        <div class="w-full flex justify-center items-center dark:bg-gray-700">

        <section class="dark:bg-gray-800">
            <div class="max-w-6xl px-4 mx-auto text-center lg:px-6">
                <figure class="mx-auto">
                    <svg class="h-20 mx-auto text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"></path>
                    </svg>
                    <blockquote>
                        <p class="five-title font-medium text-gray-700 dark:text-white leading-[3.8rem]">
                            I had a smaller budget so did not expect much, but Thryve{' '}
                            <span className="testimonial-block">blew my expectations out of the water</span>. Within just a few days, they created an 
                            amazing website for my lawn-mowing business and setup everything from forms to analytics
                            and I already see higher traffic to my site. <span className="testimonial-block">Amazing agency to work with!</span>
                        </p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <img class="w-6 h-6 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile picture"/>
                        <div class="flex items-center divide-x-2 divide-gray-400 dark:divide-gray-700">
                            <div class="pr-3 text-lg font-medium text-gray-900 dark:text-white">Blake M.</div>
                            <div class="pl-3 text-lg font-light text-gray-500 dark:text-gray-400">Founder of <a href="https://glmow.netlify.app" target='_blank' className="text-blue-600 underline">Greenleaf Mowing</a></div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>

        </div>
    </div>
  )
}

export default Testimonial