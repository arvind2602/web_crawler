import React from 'react'
import "./style.css";
import CycloneIcon from "@mui/icons-material/Cyclone";
const Face = () => {
  return (
    <div className="container" id="container">
      <h2>
        {" "}
        <span className="logo">
          <CycloneIcon />
        </span>
        Smart Crawler
      </h2>
      <div className='video0'>
        <video autoPlay loop muted/>
      </div>
      </div>
  )
}

export default Face