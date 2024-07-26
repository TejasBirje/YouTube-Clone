import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = 'New'  // currently selected category

const SideBar = () => {
  return (
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
      {categories.map((category) => (
        <button
         className="category-btn"
         style={{
            background: category.name === selectedCategory && '#fc1503', color: "white"  // conditionally changing the color 
         }}
         

         key={category.name} // whenever mapping in React, we have give each property a key

        >
            {/* // One span for ICON and one for Name of category */}
          <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
          <span style={{
            opacity: category.name === selectedCategory ? '1' : '0.8'  // dimming the unselected categories
          }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
