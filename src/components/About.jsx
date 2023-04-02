import React from 'react'

const About = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

                        <img class="object-cover object-center rounded" alt="hero" src="images/itsme.png"></img>
                    </div>
                    <div
                        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-xl mb-4 text-gray-900">Welcome to weather app
                        </h1>
                        <p class="mb-8 leading-relaxed text-3xl font-medium text-black">I'm Upcoming <span
                            class="text-teal-300">MERN Stack Developer</span> & SDE at <span class="text-indigo-500">
                                @Microsoft </span></p>
                        <div class="flex justify-center">
                            <button
                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a
                                    href="https://www.linkedin.com/in/kiran-shinde-sde1/" target="_blank">About me</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About