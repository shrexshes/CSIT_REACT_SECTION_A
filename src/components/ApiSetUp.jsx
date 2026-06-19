import React from 'react'

const ApiSetUp = ({ apiKeyInput, setApiKeyInput, onSubmit }) => {
    return (
        <div className='bg-neutral-900 h-screen'>
            <div className='max-w-6xl mx-auto py-32'>
                <h2 className='text-4xl text-white font-semibold google'>Welcome to MoodBite</h2>
                <p className='text-lg google font-light text-white'>Ai Powered recipes for every feelings</p>

                <form onSubmit={onSubmit}>
                    <p className='text-lg google font-light text-white'>Get Your Api Key At</p>

                    <a className='text-lg google font-light text-white underline' href='https://aistudio.google.com/app/apikey' target='_blank'> Ai Studio</a>

                    <br />
                    <br />
                    <input
                        value={apiKeyInput}
                        onChange={(e) => setApiKeyInput(e.target.value)}
                        className='bg-white p-4 w-full rounded-full' type='text' placeholder='Enter your Api Key please'></input>

                    <button type='submit' className='bg-white text-black px-4 py-2 rounded-full my-6'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ApiSetUp