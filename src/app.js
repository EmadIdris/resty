import React, { useState, useEffect, useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Center, Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import './app.scss';
import Header from './components/header/index';
// import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';
import History from './components/history/index';
//------------------------------------------------------------------------
let initialState = {
  data: {},
  requestParams: {},
  history: []
}
let reducerFunction = (state, action) => {
  switch (action.type) {
    case 'setParamsAction':
      return { ...state, requestParams: action.payload };
    case 'setDataAction':
      return { ...state, data: action.payload };
    case 'setHistoryAction':
      return { ...state, history: [action.payload, ...state.history] };
    default:
      return state;
  }
}
//------------------------------------------------------------------------
export default function App() {
  let [goFlag, setGoFlag] = useState(false);
  let [resultFlag, setResultFlag] = useState(false);
  let [state, dispatch] = useReducer(reducerFunction, initialState);
  useEffect(() => {
    let responseFunction = async () => {
      setResultFlag(false);
      setGoFlag(state.requestParams.url);
      let newResponse = {};
      let newCount = 0;
      let config = {
        method: `${state.requestParams.method}`,
        baseURL: `${state.requestParams.url}`,
        body: `${state.requestParams.body}`
      }
      await axios(config).then(response => {
        setGoFlag(false);
        setResultFlag(true);
        newResponse = {
          headers: response.headers,
          body: response.data
        };
        newCount = newResponse.body.length;
      })
      const data = {
        count: newCount,
        results: newResponse,
      };
      await dispatch({ type: 'setDataAction', payload: data });
      let obj = {
        requestParams: state.requestParams,
        data: data
      };
      dispatch({ type: 'setHistoryAction', payload: obj });
    }
    responseFunction();
  }, [state.requestParams], [state.data]);
  let callApi = (requestParams) => {
    dispatch({ type: 'setParamsAction', payload: requestParams });
  }
//------------------------------------------------------------------------
  let handleHistory = (historyData) => {
    console.log(historyData);
    dispatch({ type: 'setDataAction', payload: historyData });
  }
//------------------------------------------------------------------------
  return (
    <ChakraProvider color='#161616'>
      <Header />
      <Center style={{'margin-top':'30px'}} color='#161616'><Form handleApiCall={callApi} /></Center>
      <Center>
      <Grid templateColumns='repeat(3, 1fr)' gap={4} style={{'margin-top':'50px'}}>
        <GridItem colSpan={1} h='100%' color='#161616' >
          {(goFlag || resultFlag) && <div data-testid='method' className='textDev'><strong>Request Method:</strong> {state.requestParams.method}</div>}
          {(goFlag || resultFlag) && <div className='textDev'><strong>URL:</strong> {state.requestParams.url}</div>}
          {(goFlag || resultFlag) && <div className='textDev'><strong>Body:</strong> {state.requestParams.body}</div>}
          {resultFlag && <History history={state.history} handleHistory={handleHistory}/>}
        </GridItem>
        <GridItem colSpan={2} h='100%' color='#161616'>
          <Results data={state.data} resultFlag={resultFlag} goFlag={goFlag} />
        </GridItem>
      </Grid>
      </Center>
      {/* <Footer /> */}
    </ChakraProvider >
  );
}