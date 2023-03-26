import './App.css'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import Alert from './components/Alert'
import React, { useState } from 'react'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null)
  function showAlert(message, type) {
    setalert({ message: message, type: type })
  }
  function toggleMode1() {
    if (mode === 'light') {
      setMode('danger')
      document.body.style.backgroundColor = '#4E0707'
      showAlert("This color represents Danger", "danger")
      setTimeout(() => { showAlert("") }, 1500)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#CCFFFF'
      showAlert("Back to light mode", "light")
      setTimeout(() => { showAlert("") }, 1500)
    }
  }
  function toggleMode2() {
    if (mode === 'light') {
      setMode('primary')
      document.body.style.backgroundColor = '#151E3D'
      showAlert("This color represents Freedom", "primary")
      setTimeout(() => { showAlert("") }, 1500)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#CCFFFF'
      showAlert("Back to light mode", "light")
      setTimeout(() => { showAlert("") }, 1500)
    }
  }
  function toggleMode3() {
    if (mode === 'light') {
      setMode('success')
      document.body.style.backgroundColor = '#254117'
      showAlert("This color represents Nature", "success")
      setTimeout(() => { showAlert("") }, 1500)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#CCFFFF'
      showAlert("Back to light mode", "light")
      setTimeout(() => { showAlert("") }, 1500)
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtility" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextArea heading="TEXT ANALYSIS TOOL" mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path='/about' element={< About heading="About TextUtils" mode={mode}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
