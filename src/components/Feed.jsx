import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {SideBar, Videos} from "./index"

function Feed() {
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
        <SideBar />

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
           
           New <span style={{
            color: "#fc1503"
          }}>Videos</span>
        </Typography>

          <Videos/>

      </Box>

    </Stack>
  );
}

export default Feed;
