import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenue } from '../utils/redux/slices/AppSlice'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments'
import LiveChat from './LiveChat'

const Watch = () => {
    const [URLSearchParams] = useSearchParams()
    // console.log(URLSearchParams.get("v"))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenue())
    }, [])
    return (
        <div className='flex flex-col w-full'>
            <div className='px-5 flex '>
                <div>
                    <iframe width="1000" height="560" src={"https://www.youtube.com/embed/" + URLSearchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <div className='w-9/12'>
                <Comments />
            </div>
        </div>

    )
}

export default Watch
