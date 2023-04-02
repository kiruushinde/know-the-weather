import React from 'react'

const Error = () => {
    return (
        <div>
            <div class="container mx-auto flex px-5 py-8 md:flex-row justify-center items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 my-10 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="images/404.svg"></img>
                    <p class="text-2xl my-8 text-center font-medium">Oops! Page Not Found 😢</p>
                    <button class="px-3 rounded border-2 border-gray-500 mx-52"><a href="/" class="text-center">Go back</a></button>
                </div>
            </div>
        </div>
    )
}

export default Error