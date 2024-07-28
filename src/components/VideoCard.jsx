import React from 'react'
import { Stack, Box, Card, CardContent, Typography, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material' 

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {

    // console.log(videoId, snippet);  // see the structure of the data by console logging it to know all the properties in the object

  return (
    <Card sx={{ width: {md: "300px", xs: "100%"}, boxShadow: "none", borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

            {/* The image or the Thumbnail here */}
            <CardMedia 
            
                image={snippet?.thumbnails?.high.url}
                alt={snippet?.title}
                sx={{width: 358, height: 180}}    
            />
                
        </Link>
        {/* The title of the video here */}
        <CardContent sx={{backgroundColor: "#1e1e1e", height: "90px"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                {/* Take only first 60 characters of the title, so we slice it */}
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        {/* The channel title here */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight="bold" color="gray">
                {/* Take only first 60 characters of the title, so we slice it */}
                {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                {/* The small tick icon */}
                <CheckCircle sx={{fontSize: 12, color: "gray", ml: "4px"}}/>
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard