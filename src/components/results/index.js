import React from 'react';
import JSONPretty from 'react-json-pretty';
import Loading from '../loading';
//---------------------------------------------------------
function Results(props){
  return (
    <section>
     { props.data ?<JSONPretty data-testid="renderedData" data={props.data}></JSONPretty>  : <Loading/>}
    </section>
  );
}
//---------------------------------------------------------
export default Results;