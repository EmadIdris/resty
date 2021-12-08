import React from "react";
import './history.scss';
//----------------------------------------
function History (props){
    return(
        <div>
        <h2>History:</h2>
        {props.history.map((data,idx) =>{
            return(
                <>
                   <p className='hmethod'>{data.method}</p>
                   <p className='hurl'>{data.url}</p>
                </>
            )
        })}
        </div>
    )
}
//----------------------------------------
export default History;