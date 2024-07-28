import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }) => {
  // taking the videos from Feed.jsx as props

  console.log(videos); // to check if we're getting videos

  return (
    // we first need to decide if we are going to render the Channel profile in the result(first thing in the result)
    // if it data contains the videoId render it with videoCard
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
