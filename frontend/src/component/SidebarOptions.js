import React from 'react';
import "./SidebarOptions.css";
import technolgy from '../assets/technology.jpeg';
import Science from '../assets/Science.jpeg';
import health from '../assets/health.jpeg';
import movies from '../assets/movies.jpeg';
import cooking from '../assets/cooking.png';
import history from '../assets/history.jpeg';
import psyco from '../assets/psyco.jpg';
import music from '../assets/music.jpeg';
import education from '../assets/education.jpeg';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function  SidebarOptions () {
  return (
    <div className='sidebarOptions'>
        <div className="sidebarOption">
        <img
          src={history}
          alt=""
        />
        <p>History</p>
      </div>
      <div className="sidebarOption">
        <img
          src={psyco}
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src={cooking}
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src={music}
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Science}
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src={health}
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src={movies}
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src={technolgy}
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src={education}
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <AddOutlinedIcon />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions