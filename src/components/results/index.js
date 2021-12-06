import React from 'react';
import JSONPretty from 'react-json-pretty';
function Results(props){
  return (
    <section>
     { props.data ?<JSONPretty data-testid="renderedData" data={props.data}></JSONPretty>  : null}
    </section>
  );
}
export default Results;