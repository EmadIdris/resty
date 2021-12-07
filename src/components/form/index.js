'use strict'
import React, { useState } from 'react';
import './form.scss';

function Form(props) {
  let [showPostTextArea, setShowPostTextArea] = useState(false);
  let [method, setmethod] = useState('get');
  let [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
  let [requestBody, setrequestBody] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: url
    };
    props.handleApiCall(formData, requestBody);
  }
  function handlePostTextArea(e) {
    setShowPostTextArea(!showPostTextArea);
    setmethod(e.target.id);
  }
  function setMethod(e) {
    setmethod(e.target.id);
  }
  function handleUrl(e) {
   
    seturl(e.target.value);
  }

  function handleRequestBody(e) {
    setrequestBody(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input required name='url' type='text' onChange={handleUrl}/>
          <button type="submit" data-testid="submit">GO!</button>
        </label>
        <label className="methods">
        <button className='butt' type='button' id="get" onClick={setMethod}>GET</button>
       <button className='butt' type='button' id="post" onClick={handlePostTextArea}>POST</button>
       <button className='butt' type='button' id="put" onClick={handlePostTextArea}>PUT</button>
       <button className='butt' type='button' id="delete" onClick={setMethod}>DELETE</button>
     </label>
      </form>
      {showPostTextArea && <textarea name="postAndPut" rows="10" cols="35" onChange={handleRequestBody}/>}
    </>
  );
}
export default Form;