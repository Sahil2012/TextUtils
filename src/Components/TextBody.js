import React from 'react'
import propTypes from 'prop-types';
import { useState } from 'react';


export default function TextBody(props) {

    let [text, setText] = useState('');

    let onTextChange = (event) => {
        setText(event.target.value);
    }

    let onClickUp = () => {
        let newText = text.trim().toUpperCase();

        if (newText === "") {
            props.showAlert("Enter text to perform operation", "Danger");

        } else {
            setText(newText);
            props.showAlert("Converted to UpperCase", "Success");
        }

    }

    let onClickLow = () => {
        let newText = text.trim().toLowerCase();

        if (newText === "") {
            props.showAlert("Enter text to perform operation", "Danger");

        } else {
            setText(newText);
            props.showAlert("Converted to LowerCase", "Success");
        }

    }

    let clearText = () => {
        setText("");
    }

    let onClickCopy = () => {

        if (text.trim() === "") {
            props.showAlert("Enter text to perform operation", "Danger");

        } else {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard", "Success");
        }

    }

    let onClickRemove = () => {

        if (text.trim() === "") {
            props.showAlert("Enter text to perform operation", "Danger");
        } else {
            let listWords = text.split(/[ ]+/);
            setText(listWords.join(" "));
            props.showAlert("Whitespaces removed", "Success");
        }

    }

    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#c9ccd9' : 'white' }} value={text} onChange={onTextChange} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>

                <button type="button" className="btn btn-success mx-2 my-2" onClick={onClickUp}>Make Uppercase</button>
                <button type="button" className="btn btn-success mx-2 my-2" onClick={onClickLow}>Make LowerCase</button>
                <button type="button" className="btn btn-success mx-2 my-2" onClick={onClickRemove}>Remove Space</button>
                <button type="button" className="btn btn-warning mx-2 my-2" onClick={onClickCopy}>Copy Text</button>
                <button type="button" className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear</button>
            </div>

            <div className='container my-2' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Summary about your text</h3>
                <p>Your text has {text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.trim().length} characters</p>
                <p>Time to read : {0.08 * (text.trim().length === 0 ? 0 : text.trim().split(" ").length)}s</p>
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