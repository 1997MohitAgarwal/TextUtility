import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="nov">
      <Link className="navbar-brand " to="/">
        <img src="image.png" width="30" height="30" alt="Facebook" />
      </Link>
      <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.title}</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">About <span className="sr-only">(current)</span></Link>
          </li>
          <div id='box3'>
        <div className={`custom-control custom-switch mx-1 text-${props.mode === 'light' ? 'danger' : 'light'}`}>
          <input type="checkbox" className="custom-control-input" onClick={props.toggleMode1} id="customSwitch1" />
          <label className="custom-control-label" htmlFor="customSwitch1">RED</label>
        </div>
        <div className={`custom-control custom-switch mx-1 text-${props.mode === 'light' ? 'primary' : 'light'}`}>
          <input type="checkbox" className="custom-control-input" onClick={props.toggleMode2} id="customSwitch2" />
          <label className="custom-control-label" htmlFor="customSwitch2">BLUE</label>
        </div>
        <div className={`custom-control custom-switch mx-1 text-${props.mode === 'light' ? 'success' : 'light'}`}>
          <input type="checkbox" className="custom-control-input" onClick={props.toggleMode3} id="customSwitch3" />
          <label className="custom-control-label" htmlFor="customSwitch3">GREEN</label>
        </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}