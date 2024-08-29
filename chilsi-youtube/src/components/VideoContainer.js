// components/VideoContainer.js
import React, { useEffect, useState } from 'react';
import { headers, YOUTUBE_API_URL, GOOGLE_API_KEY } from '../utils/Constants';
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_API_URL);
            const data = await response.json();
            setVideos(data?.items)
            // console.log(data?.items)
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
    // console.log(videos[0])
    return (
        <div className='flex flex-wrap justify-center'>
            <AddVideoCard info={videos[10]} />
            {videos.map(video => (
                <Link to={`/watch?v=` + video.id}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
