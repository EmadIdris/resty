import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../loading/index';
//----------------------------------------
function Results (props){
  return(
    <>
     <section>
      {props.data ? <JSONPretty data-testid='result' data={props.data}></JSONPretty> : <Loading/>}
      </section>
    </>
  )
}
//----------------------------------------
export default Results;