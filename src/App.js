// starting point of our app

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'  // a simple div element

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components/index"


function App() {
  return (
    <BrowserRouter>

        <Box sx={{backgroundColor: "#000"}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </Box>

    </BrowserRouter>
  )
}

export default App