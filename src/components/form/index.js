
'use strict'
import React, { useState } from 'react';
import './form.scss';

function Form(props){
  const [state, setState] = useState({methodstate: ''});

  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      method:state.methodstate,
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }
 
  function data(e,val){
    e.preventDefault();
    setState({methodstate:val})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit" >GO!</button>
        </label>
        <label className="methods">
          <button id="get" onClick={(e)=>data(e,'GET')} >GET</button>
          <button id="post"  onClick={(e)=>data(e,'POST')} >POST</button>
          <button id="put"  onClick={(e)=>data(e,'PUT')} >PUT</button>
          <button id="delete"  onClick={(e)=>data(e,'DELETE')} >DELETE</button>
        </label>
      </form>
       
    </>
  );
}


// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

  // render() {
  //   return (
  //     <>
  //       <form onSubmit={this.handleSubmit}>
  //         <label >
  //           <span>URL: </span>
  //           <input name='url' type='text' />
  //           <button type="submit">GO!</button>
  //         </label>
  //         <label className="methods">
  //           <span id="get">GET</span>
  //           <span id="post">POST</span>
  //           <span id="put">PUT</span>
  //           <span id="delete">DELETE</span>
  //         </label>
  //       </form>
  //     </>
  //   );
  // }
// }

export default Form;