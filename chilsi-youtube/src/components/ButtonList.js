import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonList = ["All", "JavaScript", "Music", "News", "Sports", "Olympics", "Live", "Podcasts", "Cricket", "mix", "Tamil Cinema", "Dramedy", "Telivision comedy", "Motivation", "Comedy", "Public speaking event", "Recently uploaded", "Watched"]
    return (

        <div className='flex space-x-5 whitespace-nowrap p-2 top-[58px] z-10 bg-white w-full overflow-x-auto fixed'>
            {buttonList.map((name, index) => (
                <Button key={index} name={name} />
            ))}

        </div>



    )
}

export default ButtonList
