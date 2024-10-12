import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // State to track the active color mode
  const [activeMode, setActiveMode] = useState(null);

  // Function to handle mode change
  const handleModeChange = (mode) => {
    // Call the appropriate toggle function based on selected mode
    switch (mode) {
      case 'red':
        props.toggleMode1(true); // Activate red theme
        setActiveMode('red'); // Set the active mode to red
        break;
      case 'blue':
        props.toggleMode2(true); // Activate blue theme
        setActiveMode('blue'); // Set the active mode to blue
        break;
      case 'green':
        props.toggleMode3(true); // Activate green theme
        setActiveMode('green'); // Set the active mode to green
        break;
      default:
        // If no mode is selected, reset to default theme
        setActiveMode(null); // Clear active mode
        break;
    }
  };
  
  

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="nov">
      <Link className="navbar-brand" to="/">
        <img src="/assets/images/image.png" width="30" height="30" alt="Facebook" />
      </Link>
      <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.title}</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">About <span className="sr-only">(current)</span></Link>
          </li>
          <div id='box3' className="form-group">
            {/* RED radio button */}
            <div className={`custom-control custom-radio mx-1 text-${props.mode === 'light' ? 'danger' : 'light'}`}>
              <input
                type="radio"
                className="custom-control-input"
                checked={activeMode === 'red'}
                onChange={() => handleModeChange('red')}
                id="radioRed"
                name="colorMode"
              />
              <label className="custom-control-label" htmlFor="radioRed">RED</label>
            </div>
            {/* BLUE radio button */}
            <div className={`custom-control custom-radio mx-1 text-${props.mode === 'light' ? 'primary' : 'light'}`}>
              <input
                type="radio"
                className="custom-control-input"
                checked={activeMode === 'blue'}
                onChange={() => handleModeChange('blue')}
                id="radioBlue"
                name="colorMode"
              />
              <label className="custom-control-label" htmlFor="radioBlue">BLUE</label>
            </div>
            {/* GREEN radio button */}
            <div className={`custom-control custom-radio mx-1 text-${props.mode === 'light' ? 'success' : 'light'}`}>
              <input
                type="radio"
                className="custom-control-input"
                checked={activeMode === 'green'}
                onChange={() => handleModeChange('green')}
                id="radioGreen"
                name="colorMode"
              />
              <label className="custom-control-label" htmlFor="radioGreen">GREEN</label>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}
