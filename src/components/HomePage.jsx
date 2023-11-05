import React from 'react'

const HomePage = () => {
    return (
        <div className='w-[70%] flex flex-col text-white mx-auto'>
            <div className=' mx-auto m-4 flex flex-col justify-center'>
                <p className='text-5xl text-center m-6'>Beta testing site</p>
                <p className='text-4xl text-center mb-6'>Welcome to the Testing of the Predictive Collision Avoidance System (PCAS)!</p>

                <p className='text-xl mb-6'>The Predictive Collision Avoidance System is an innovative safety feature designed to enhance your driving experience. It predicts potential collisions by analyzing your car's velocity and surrounding traffic conditions, providing timely holographic alerts to help you avoid accidents.</p>


                <p className='text-2xl mb-6 font-bold'>Instructions for Testers:</p>
                <p className='text-xl mb-4 '>Understand the Feature: <br />
                    PCAS alerts you to impending risks through a holographic display. Your task is to observe its effectiveness in different driving scenarios.</p>
                <p className='text-xl mb-4 '>Drive in Various Environments:<br />
                    Utilize the application's teleport feature to test drive in diverse environments, such as highways and residential areas. Observe how the PCAS adapts to these changes.</p>
                <p className='text-xl mb-4 '>React and Evaluate:<br />
                    When you receive a holographic alert, react as you would in a real driving situation (slow down, change direction). Assess the timing, accuracy, and helpfulness of these alerts.</p>


                <p className='text-2xl mb-6 font-bold'>How to Download the Application:</p>
                <p className='text-xl mb-4 '>Ensure Compatibility:<br />
                    Before downloading, please verify that your system meets the required specifications listed here [link to system requirements].</p>
                <p className='text-xl mb-4 '>Download the App:<br />
                    Scroll down to the bottom of this page. You'll find a 'Download' button. Click on it to initiate the download of the PCAS testing application. </p>
                <p className='text-xl mb-4 '>Install and Launch: <br />
                    After downloading, follow the on-screen instructions to install the application. Once installed, launch it to begin your beta testing experience.</p>

                <p className='text-lg'>Note: Regular updates may be released throughout the testing phase. Stay tuned for notifications and ensure your application is up to date for the best testing experience.
                </p>


            </div>
            <div className='mx-auto flex flex-row m-8'>
                <a href="">
                    <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl px-24 py-5 text-center mr-2 mb-2">Download content</button>
                </a>
                <a href="/feedback" target='black'>
                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl px-24 py-5 text-center mr-2 mb-2">Go to Feedback</button>
                </a>

            </div>

            <div className="aspect-w-16 aspect-h-9">
            <iframe width="1583" height="584" src="https://www.youtube.com/embed/V2CbHFqpn9c" title="Team Atom Video || PCAS Feature Simulation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="text-center mt-16 mb-16">
                <p className='text-lg'>Your contribution is pivotal in shaping the future of automotive safety. Thank you for participating in this vital phase of development.
                    Drive Safely and Stay Alert!</p>
            </div>
        </div>
    )
}
export default HomePage;
