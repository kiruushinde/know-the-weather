import React from 'react'

const Contact = () => {
    return (
        <div class="w-full">
            <h1 className='my-14 text-center font-medium text-slate-800 text-xl -mb-20'> <span className='underline'>Your Feedback Is Valuable For Me </span>😇👇</h1>
            <div class="block mx-auto my-32 p-8 border-slate-200 border-2 rounded-lg shadow-lg bg-white max-w-md">
                <form action='https://formspree.io/f/xwkzeogo' method='POST'>
                    <div class="form-group mb-6">
                        <input type="text" name='name' class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name"></input>
                    </div>
                    <div class="form-group mb-6">
                        <input type="email" name='Email' class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address"></input>
                    </div>
                    <div class="form-group mb-6">
                        <textarea name='message' class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" class="w-full px-6 py-2.5 bg-violet-600 text-white font-medium text-lg leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send my Feedback 😊✌️</button>
                </form>
            </div>
        </div>
    )
}

export default Contact