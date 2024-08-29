import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonList = ["All", "Music", "News", "Sports", "Olympics", "Live", "Podcasts", "Cricket"]//"Cooking", "Tamil-movies", "T-series", "Indian-movies", "Google", "Skills", "Python"
    return (

        <div className='flex space-x-5 whitespace-nowrap p-2 overflow-x-auto'>
            {buttonList.map((name, index) => (
                <Button key={index} name={name} />
            ))}
        </div>



    )
}

export default ButtonList
