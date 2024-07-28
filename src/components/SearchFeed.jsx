import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  // since we want the fetchAPi function to be called as soon as the page is loaded because we want to immediately fetch the data, So we use useEffect hook, it is life cycle hook which is called when component is called

  const {searchTerm} = useParams()

  useEffect(() => {
    // setVideos(null);
    // async func
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  },[searchTerm]); 

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Results for: <span
          style={{
            color: "#fc1503",
          }}
        >
           {searchTerm}
        </span> Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
