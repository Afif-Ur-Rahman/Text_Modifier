import React, { useState } from "react";

const TextForm = (props) => {

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSimple = () => {
    const newText = text;
    setMText(newText);
    props.showAlert("Simple Text", "success");
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setMText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setMText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(mText);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setMText(newText);
    props.showAlert("Extra Spaces have been removed", "success");
  };

  const handleWordUp = () => {
    const newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setMText(newText);
    props.showAlert("Capitalized the first character of every word", "success");
  };

  const handleToggle = () => {
    const newText = text
      .split(" ")
      .map((word) => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase())
      .join(" ");
    setMText(newText);
    props.showAlert("tOGGLED eVERY wORD", "success");
  };

  const handleSentenceUp = () => {
    const newText = text.replace(/(^\w|\.\s*\w)/g, (match) =>
      match.toUpperCase()
    );
    setMText(newText);
    props.showAlert("Capitalized the first word of each sentence", "success");
  };

  const handleClClick = () => {
    setText("");
    setMText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleListenText = () => {
    if (mText) {
      const utterance = new SpeechSynthesisUtterance(mText);
      speechSynthesis.speak(utterance);
      props.showAlert("Reading Text", "success");
    } else {
      props.showAlert(
        "No Modified text to Read. Convert the Text First",
        "danger"
      );
    }
  };

  const [text, setText] = useState("");
  const [mText, setMText] = useState("");
  return (
    <>
      <div className="d-flex mobile my-3">
        <div className="container">
          <h3>{props.heading}</h3>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              value={text}
              onChange={handleOnChange}
              style={{
                background: props.mode === "dark" ? "bisque" : "white",
              }}
              placeholder="Type or Paste text here"
              rows="10"
            ></textarea>
          </div>
          <div className="custom">
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleSimple}
            >
              Simple Text
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleUpClick}
            >
              TO UPPERCASE
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleLoClick}
            >
              to lowercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleWordUp}
            >
              Title Case
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleSentenceUp}
            >
              Sentence case
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleToggle}
            >
              tOGGLE cASE
            </button>
          </div>
          <h4>Text Summary: </h4>
          <div>
            <span className="mx-1">
              Words:
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </span>
            <span className="mx-1">Characters: {text.length}</span>
            <span className="mx-1">
              Reading Time: {(0.008 * text.split.length).toFixed(1)} minutes
            </span>
          </div>
        </div>
        <div className="container">
          <h3>Modified Text:</h3>
          <div className="mb-3">
            <textarea
              readOnly
              className="form-control"
              id="mybox2"
              value={mText}
              style={{
                background: props.mode === "dark" ? "bisque" : "white",
              }}
              placeholder="Modified Text will be displayed here"
              rows="10"
            ></textarea>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end custom">
            <button
              disabled={mText.length === 0}
              className="btn btn-primary me-md-2 mb-3"
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              disabled={mText.length === 0}
              className="btn btn-primary me-md-2 mb-3"
              onClick={handleListenText}
            >
              Listen Text
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-danger mb-3"
              onClick={handleClClick}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>

      <div className="mx-3"></div>
    </>
  );
}

export default TextForm;