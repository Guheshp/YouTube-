// components/VideoContainer.js
import React, { useEffect, useState } from 'react';
import { headers, YOUTUBE_API_URL, GOOGLE_API_KEY } from '../utils/Constants';
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from './Skeleton';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const fetchVideos = async () => {
                await getVideos();
                setLoad(false);
            };
            fetchVideos()
        }, 2000)
    }, [videos]);

    const isMenueOpen = useSelector(store => store.app.isMenueOpen)

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
    if (!videos) return
    return (
        <>
            <div className={isMenueOpen ? "ms-[220px]" : ""}>

                <div className='flex flex-wrap justify-center w-full p-3'>
                    <AddVideoCard info={videos[32]} />
                    {load ? (
                        <div className='flex flex-wrap justify-center gap-2 '>
                            {Array.from({ length: 200 }).map((_, index) => (
                                <Skeleton key={index} />
                            ))}
                        </div>
                    ) : (
                        <>
                            {videos.length > 0 ? (
                                videos.map(video => (
                                    <Link key={video?.id} to={`/watch?v=${video.id}`}>
                                        <VideoCard info={video} />
                                    </Link>
                                ))
                            ) : (
                                <div>No videos available.</div>
                            )}
                        </>
                    )}
                </div>

            </div>

        </>
    );
};

export default VideoContainer;
