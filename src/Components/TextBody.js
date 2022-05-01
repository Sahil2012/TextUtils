import React from 'react'
import propTypes from 'prop-types';
import { useState } from 'react';


export default function TextBody(props) {

    let [text, setText] = useState('');
    let [valText, setValText] = useState('');

    let onTextChange = (event) => {
        setValText(event.target.value);
    }

    let onClickUp = () => {
        let newText = valText.trim().toUpperCase();

        if (newText === "") {
            props.showAlert("Enter text to perform operation", "Danger");

        } else {
            setText(newText);
            props.showAlert("Converted to UpperCase", "Success");
        }

    }

    let onClickLow = () => {
        let newText = valText.trim().toLowerCase();

        if (newText === "") {
            props.showAlert("Enter text to perform operation", "Danger");

        } else {
            setText(newText);
            props.showAlert("Converted to LowerCase", "Success");
        }

    }

    let clearText = () => {
        setValText("");
        setText("");
    }

    let onClickCopy = () => {

        if (valText.trim() === "") {
            props.showAlert("Enter text to perform operation", "Danger");

        } else {
            navigator.clipboard.writeText(valText);
            props.showAlert("Copied to Clipboard", "Success");
        }

    }

    let onClickRemove = () => {

        if (valText.trim() === "") {
            props.showAlert("Enter text to perform operation", "Danger");
        } else {
            let listWords = valText.split(/[ ]+/);
            setText(listWords.join(" "));
            props.showAlert("Whitespaces removed", "Success");
        }

    }

    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#c9ccd9' : 'white' }} value={valText} onChange={onTextChange} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>

                <button type="button" className="btn btn-success mx-2" onClick={onClickUp}>Make Uppercase</button>
                <button type="button" className="btn btn-success mx-2" onClick={onClickLow}>Make LowerCase</button>
                <button type="button" className="btn btn-success mx-2" onClick={onClickRemove}>Remove Space</button>
                <button type="button" className="btn btn-warning mx-2" onClick={onClickCopy}>Copy Text</button>
                <button type="button" className="btn btn-danger mx-2" onClick={clearText}>Clear</button>
            </div>

            <div className='container my-2' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Summary about your text</h3>
                <p>Your text has {valText.trim().length === 0 ? 0 : valText.trim().split(" ").length} words and {valText.trim().length} characters</p>
                <p>Time to read : {0.08 * (valText.trim().length === 0 ? 0 : valText.trim().split(" ").length)}s</p>
                <h3>Answer : </h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextBody.propTypes = {
    heading: propTypes.string
}

TextBody.defaultProps = {
    heading: "Enter the text"
}