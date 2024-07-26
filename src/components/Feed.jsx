import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'

function Feed() {
  return (
    <Stack sx={{flexDirection: {  
      sx: "column",  // on small devices, show in column format
      md: "row", // on large devices, show in row format
    }}}>

      <Box sx={{height: {
        sx: 'auto',
        md: '92vh'
      }, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        SideBar

        {/* used instead of <p> and headings, part of MUI */}
        <Typography
        className='copyright' variant='body2' sx={{mt: 1.5, color: "#FAF9F6"}}
        >  
          Copyright 2024 Tejas
        </Typography>

      </Box>
      
    </Stack>
  )
}

export default Feed