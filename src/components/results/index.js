import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/dist/acai');
//------------------------------------------------------------------------
export default function Results(props){
  let {data, goFlag, resultFlag} = props;
  return(
    <section data-testid='result' id="results" >
      {goFlag && <div class="dots-4"></div>}
      {resultFlag && <JSONPretty id="json-pretty" data={data} theme={JSONPrettyMon}></JSONPretty>}
    </section>
  );
}
//------------------------------------------------------------------------
