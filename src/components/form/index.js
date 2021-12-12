import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './form.scss';
import { Button, Box } from '@chakra-ui/react';
//------------------------------------------------------------------------
export default function Form(props) {
  let { handleApiCall } = props;
  let [method, setMethod] = useState('GET');
  let handleSubmit = (e) => {
    e.preventDefault();
    let body = 'no body'
    if (method === 'POST' || method === 'PUT') {
      body = e.target.body.value;
    }
    let formData = {
      method: method,
      url: e.target.url.value,
      body: body
    };
    handleApiCall(formData);
  }
  let handleClick = (e) => {
    document.getElementById(method).style.background = '#805AD5';
    e.target.style.background = '#322659';
  }
  return (
//------------------------------------------------------------------------
    <>
      <form onSubmit={handleSubmit}>
        <label className='inputLabel'>
          <span data-testid='URL'>URL: </span>
          <input data-testid='URLinput' name='url' type='text' />
          <Box as='button' borderRadius='md' bg='teal.600' color='white' data-testid='goButton' type='submit'>GO!</Box>
        </label>
        <label className='methods'>
          <Box as='button' borderRadius='md' bg='purple.500' color='white' px={4} h={8} onClick={(e) => { setMethod('GET'); handleClick(e) }} id='GET'>GET</Box>
          <Box as='button' borderRadius='md' bg='purple.500' color='white' px={4} h={8} onClick={(e) => { setMethod('POST'); handleClick(e) }} id='POST'>POST</Box>
          <Box as='button' borderRadius='md' bg='purple.500' color='white' px={4} h={8} onClick={(e) => { setMethod('PUT'); handleClick(e) }} id='PUT'>PUT</Box>
          <Box as='button' borderRadius='md' bg='purple.500' color='white' px={4} h={8} onClick={(e) => { setMethod('DELETE'); handleClick(e) }} id='DELETE'>DELETE</Box>
        </label>
        {(method === 'POST' || method === 'PUT') && <textarea name='body' type='text' rows='4' cols='50'>JSON body</textarea>}
      </form>
    </>
//------------------------------------------------------------------------
  )
}