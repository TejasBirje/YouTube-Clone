import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {SideBar, Videos} from "./index"
import { fetchFromAPI } from "../utils/fetchFromApi";

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState(null)
  // since we want the fetchAPi function to be called as soon as the page is loaded because we want to immediately fetch the data, So we use useEffect hook, it is life cycle hook which is called when component is called
  
    useEffect(() => {
      // async func
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
    }, [])
  

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column", // on small devices, show in column format
          md: "row", // on large devices, show in row format
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* used instead of <p> and headings, part of MUI */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#FAF9F6" }}
        >
          Copyright 2024 YouTube
        </Typography>
      </Box>

      <Box p={2} sx={{
        overflowY: 'auto', height: '90vh', flex: 2
      }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: "white"
        }}>
           
           {selectedCategory} <span style={{
            color: "#fc1503"
          }}>Videos</span>
        </Typography>

          <Videos videos={videos}/>

      </Box>

    </Stack>
  );
}

export default Feed;
