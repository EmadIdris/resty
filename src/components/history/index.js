'use strict';
import './history.scss'
import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';
import { Button } from '@chakra-ui/react';
let JSONPrettyMon = require('react-json-pretty/dist/acai');
//------------------------------------------------------------------------
function History(props) {
    let { history, handleHistory } = props;
    let [showResult, setShowResult] = useState(false);
    let handleResult = (element) => {
        setShowResult(true);
        console.log(element);
        handleHistory(element.data);
    }
    return (
        <section>
            <br/><br/><strong>History Tab</strong><br/><br/>
            {history ? history.map(element => {
                return (
                    <div >
                        <Button colorScheme='teal' size='sm' onClick={() => handleResult(element)}>{element.requestParams.method}</Button>
                        <br/><p><strong>URL: </strong>{element.requestParams.url}</p><br/>
                    </div>
                )
            }) : null}
        </section>
    )
}
export default History;