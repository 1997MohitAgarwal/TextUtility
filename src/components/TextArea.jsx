import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("")
  const [btn1, changeBtn1] = useState("Bold Text")
  const [btn2, changeBtn2] = useState("Italic Text")
 
  function convertToUpper() {
    let newText = text.toUpperCase()
    setText(newText)
  }
  function convertToLower() {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lower case", "light")
    setTimeout(() => { props.showAlert("") }, 1500)
  }
  function changeItalic() {
    let newText = document.getElementById("box")
    if (newText.style.fontStyle != "italic") {
      newText.style.fontStyle = "italic"
      changeBtn2("Remove Italic")
    }
    else {
      newText.style.fontStyle = "normal"
      changeBtn2("Italic Text")

    }
  }
  function changeBold() {
    let newText = document.getElementById("box")
    if (newText.style.fontWeight != "bold") {
      newText.style.fontWeight = "bold"
      changeBtn1("Remove Bold")
    }
    else {
      newText.style.fontWeight = "normal"
      changeBtn1("Bold Text")

    }
  }
  function convertTitleCase() {
    let newText = text.split(" ")
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1)
    }
    setText(newText.join(" "))
  }
  function clearText() {
    let newText = "";
    setText(newText)
  }
  function handleOnchange(e) {
    setText(e.target.value)

  }
  function copyText() {
    let newText = document.getElementById("box")
    newText.select()
    navigator.clipboard.writeText(newText.value)
  }
  return (
    <>
      <div className="container text-center">
        <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'} mt-5`}>{props.heading}</h3>
      </div>
      <div className="container">
        <div className="form-group mt-3">
          <textarea className={`form-control bg-${props.mode}`} id="box" style={{ color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnchange} rows="10" placeholder="Enter Your Text"></textarea>
        </div>
        <button type="submit" className="btn btn-danger mx-2 my-2" onClick={convertToUpper}>Uppercase</button>
        <button type="submit" className="btn btn-primary mx-2 my-2" onClick={convertToLower}>Lowercase</button>
        <button type="submit" className="btn btn-secondary mx-2 my-2" onClick={copyText}>Copy Text</button>
        <button type="submit" className="btn btn-success mx-2 my-2" onClick={clearText}>Clear text</button>
        <button type="submit" className="btn btn-warning mx-2 my-2" onClick={changeItalic}>{btn2}</button>
        <button type="submit" className="btn btn-info mx-2 my-2" onClick={changeBold}>{btn1}</button>
        <button type="submit" className="btn btn-secondary mx-2 my-2" onClick={convertTitleCase}>Title Case</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h6>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h6>
      </div>
    </>
  )
}