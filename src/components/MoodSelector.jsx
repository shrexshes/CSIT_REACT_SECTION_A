import React from 'react'

const MoodSelector = ({ moods,customMood,setCustomMood,onMoodSelect,onCustomMoodSubmit }) => {
    // console.log(moods)
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-3 gap-6'>
                {moods.map((mood) => (
                    <button
                    key={mood.id}
                    onClick={()=>onMoodSelect(mood)}
                    className='bg-neutral-900 p-6 rounded-2xl'>
                        <div className='text-3xl'>{mood.emoji}</div>

                        <div className='text-xl google text-white'>{mood.label}</div>

                    </button>
                ))}
            </div>

            <form onSubmit={onCustomMoodSubmit} className='border-t-2 my-10'>
                <h2 className='text-2xl google py-5'>Describe Your Custom Mood</h2>

                <input
                value={customMood}
                onChange={(e)=>setCustomMood(e.target.value)}
                type='text' className='w-full p-4 rounded-full bg-neutral-100 ' placeholder='add your custom mood'/>

                <button type='submit' className='bg-neutral-900 text-white px-4 py-2 rounded-full google my-5'>Start Cooking</button>
            </form>
        </div>
    )
}

export default MoodSelector