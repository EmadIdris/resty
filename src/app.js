'use strict'
//---------------------------------------------------------
import React , {useState, useEffect} from 'react';
import './app.scss';
import axios from 'axios'
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
//---------------------------------------------------------
function App(props){
  const [state, setState] = useState({data: '', requestParams:{}});
  const [history,setHistory]=useState([]);
//---------------------------------------------------------
 async function callApi(requestParams) {
   setState({requestParams})
   setHistory([...history,requestParams.url,requestParams.method])
   try
   { 
     console.log(111111111,requestParams.url);
    const dataurl = await axios.get(requestParams.url);
    console.log(2222222222222,dataurl);
    const data = {
      headers: [dataurl.headers],
      results: [dataurl.data],
    };
    setState({data}); 
  }
  catch(e){
    console.log('error');
  }
  } 
//---------------------------------------------------------
useEffect(()=> {
    console.log("%c I RUN ON EVERY RE-RENDER", 'background:#ccc; color:red');
});
//---------------------------------------------------------
useEffect(()=> {
    console.log(`%c I RUN ON HISTORY CHANGE: ${history}` , 'background:#000; color:purple');
}, [history]);
//---------------------------------------------------------
useEffect(()=> {
    console.log("I RUN ON STATE, HISTORY CHANGE: ", state);
}, [state, history]);
//---------------------------------------------------------
useEffect(()=> {
    console.log("Initial loading ", state);
}, []);
//---------------------------------------------------------
  return (
    <React.Fragment>
      <Header />
         <History history={history}/>  
      <Form handleApiCall={callApi} />
      <Results data={state.data} />

      <Footer />
    </React.Fragment>
  );
}
export default App;