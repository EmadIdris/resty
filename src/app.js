import React from 'react';
import axios from 'axios';
import {useState, useEffect, useReducer} from 'react';
import historyReducer,{addHistory,emptyHistory} from './components/reducer/reducer';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/index';
import Loading from './components/loading/index';
//----------------------------------------
const initialState = {
  history : []
}
//----------------------------------------
function App(props){
  const [requestParams,setRequestParams]= useState({});
  const [data,setData]= useState([]);
  const [loading,setLoading]= useState(false);
  const [state, dispatch] = useReducer(historyReducer, initialState)
  const callApi = async(requestParams) => {
    // mock output
    let url = requestParams.url;
    let method = requestParams.method;
    let body = requestParams.body;
    let results = requestParams.results
//---------------------------------------- console.log
    // console.log('requestParams',requestParams);
    // console.log('requestParams.url',requestParams.url);
    // console.log('requestParams.method',requestParams.method);
    // console.log('requestParams.body',requestParams.body);
//----------------------------------------
    if(method == 'get' || method == 'delete'){
      await axios[method](url).then(result =>{
        console.log(11111111111,url);
        setData([...data ,result.data]);
        console.log(22222222222222222222,data);
        console.log('data.data',result.data);
        dispatch(addHistory(requestParams,result.data));
        setLoading(true);
      })
    }else{
      await axios[method](url,body).then(result =>{
        setData([...data , result.data]);
        console.log('data.data',result.data);
        dispatch(addHistory(requestParams,result.data));
        setLoading(true);
      })
    }
    console.log('data',data);
//----------------------------------------
  }
  //  (comDidM)
  useEffect(()=> {
      console.log("%c I RUN ON EVERY RE-RENDER", 'background:#ccc; color:red');
  });
//----------------------------------------
  useEffect(()=> {
    console.log('%c I RUN WHEN SENDING THE REQUEST:' , 'background:#000; color:purple',requestParams.url );
  }, [requestParams.url]);
//----------------------------------------
  useEffect(()=> {
      console.log('%c I RUN WHEN HAVE THE RESULT:' ,'background:blue; color:white', data );
  }, [data]);
//----------------------------------------
  useEffect(()=> {
    console.log('%c I RUN WHEN HAVE THE HISTORY:' ,'background:purple; color:white', history );
  }, [history]);
//----------------------------------------
  useEffect(()=> {
      console.log('%c Initial loading :', 'background:green; color:white',requestParams);
  }, []);
//----------------------------------------
//UNMOUNT
  useEffect(()=> {
      return (()=> {
          console.log("%c Component unmounted !!", "background:yellow; color:black")
      })
  });
//----------------------------------------
//----------------------------------------
  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <Results data={data}/>
      {state.history.length ? <History history={state.history}/> : null}
      {/* <Footer /> */}
    </React.Fragment>
  );
}
export default App;


