import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleonbtn=()=>{
        //console.log('click on'+Text);
        setText(Text.toUpperCase())
    }
    const handleonbtn1=()=>{
        //console.log('click on'+Text);
        setText(Text.toLowerCase())
    }
    const handleontextarea=(event)=>{
         setText(event.target.value)
    }
    const handleonbtnclear=()=>{
        setText(" ")
    }

    const handleonbtncopy=()=>{
        navigator.clipboard.writeText(Text)
    }

    const [Text, setText] = useState('');
    return (
        <div className='container my-4'>
            <h2>{props.title}</h2>
            <form>
                <div className="mb-3">
                   
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleontextarea} rows="8" value={Text} placeholder='Enter text here..'></textarea>
                </div>
                <button type="button" className="btn btn-outline-primary mx-1" onClick={handleonbtn}>Convert to Uppercase</button>
                <button type="button" className="btn btn-outline-secondary mx-1" onClick={handleonbtn1}>Convert to Lowercase</button>
                <button type="button" className="btn btn-outline-warning mx-1" onClick={handleonbtnclear}>Clear</button>
                <button type="button" className="btn btn-outline-info  mx-1 my-2" onClick={handleonbtncopy}>Copy Text</button>
            </form>
            <div className="container my-4">
                <h3>Your text summary</h3>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </div>
    )
}

TextForm.propTypes={
  title:PropTypes.string.isRequired
}