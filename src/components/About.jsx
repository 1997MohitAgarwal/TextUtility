import React from "react";
export default function About(props) {
  return (
    <>
      <div style={{height:5}}></div>
      <div className="container">
        <h3 className={`my-4 text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h3>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  TextUtils
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Only plain text may be entered into a text editor, as opposed to the formatted text of a rich text editor or word processor. These programs allow special functions such as bold, italic, and various text sizes and fonts. The editor displays only the characters visible in the file, while word processors add special formatting characters which are not visible in the document. One that only accepts plain text does not allow the user to format that text or add pictures or tables.
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  More...
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                A text editor is a software application that creates and edits plain text files. In addition to simply typing text directly, they can cut, copy, and paste text from other sources and quickly find and replace text within a file. Text editors lack the text formatting features of word processors, which use rich text files instead. Plain text cannot change the font, color, size, or layout of text on a page, nor can images be embedded. Software and website developers often use plain text editors to write, edit, and review source code.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}