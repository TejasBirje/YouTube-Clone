import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton} from "@mui/material"  // nothing but a div with white background and some elevation
import { Search } from "@mui/icons-material"

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() // when we submit a form it refreshes the page. And Reactjs we dont wanna do that
    
        if(searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm("")
        }

    }

  return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{borderRadius: 20,  // sx is for styles
            border: "1px solid #e3e3e3",
            pl: 2,
            boxShadow: 'none',
            mr: {sm: 5}
        }}  
    >
        <input
            className='search-bar'
            value={searchTerm}
            placeholder='Search'
            onChange={(e) => setSearchTerm(e.target.value)}  // e.target.value is where the value of keypress is stored in.
        />
        <IconButton type='submit' sx={{p:'10px', color: "red"}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar