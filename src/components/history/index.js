import React from 'react';
//---------------------------------------------------------
function History(props){
  return (
    <>
    {props.history.map((item, idx)=> {
           return <div data-testid={idx} key={idx}>{item}</div>
        })}
    </>
  );
}
//---------------------------------------------------------
export default History;