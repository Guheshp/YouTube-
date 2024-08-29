import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const isMenueOpen = useSelector(store => store.app.isMenueOpen)
    // console.log(isMenueOpen)
    if (!isMenueOpen) return null
    return (
        <div>
            <div className='w-48 px-5 shadow-md'>
                <ul className='mt-5'>
                    <li>
                        <Link to={`/`}>
                            Home
                        </Link>

                    </li>
                    <li>
                        Shorts
                    </li>
                    <li>
                        Subscription
                    </li>
                    <li>
                        Olympics
                    </li>
                    <li>
                        Music
                    </li>
                </ul>
                <h1 className='font-bold mt-7'>Subscription</h1>
                <ul>
                    <li>
                        Music
                    </li>
                    <li>
                        Sports
                    </li>
                    <li>
                        Games
                    </li>
                    <li>
                        Olympics
                    </li>
                    <li>
                        Music
                    </li>
                </ul>
                <h1 className='font-bold mt-7'>Explore</h1>
                <ul>
                    <li>
                        Trending
                    </li>
                    <li>
                        Shopping
                    </li>
                    <li>
                        Musics
                    </li>
                    <li>
                        Gameing
                    </li>
                    <li>
                        News
                    </li>
                    <li>
                        Sports
                    </li>
                    <li>
                        Films
                    </li>
                    <li>
                        Live
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
