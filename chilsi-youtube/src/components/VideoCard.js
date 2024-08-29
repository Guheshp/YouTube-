import React from 'react'


const VideoCard = ({ info }) => {
    // console.log("info", info)

    const snippet = info?.snippet;
    const statistics = info?.statistics

    return (
        <div className='w-72 m-2 shadow-lg'>
            <img className='rounded-lg' src={snippet?.thumbnails?.medium?.url} alt="videoimgae" />
            <ul className='ml-4'>
                <li className='font-bold py-2'>{snippet?.title}</li>
                <li className='text-sm text-gray-800'>{snippet?.channelTitle}</li>
                <li className='text-sm text-gray-800 pb-2'>{statistics?.viewCount} Views</li>
            </ul>
        </div>

    )
}

export const AddVideoCard = ({ info }) => {
    return (
        <div className='border border-red-950 rounded-lg'>
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard
