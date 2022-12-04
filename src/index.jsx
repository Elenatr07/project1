import React from "react";
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout/Layout.jsx";



const appContainer = document.querySelector('#app');


ReactDom.render(
    <div>
        <Layout />
    </div>,
    appContainer
)

//let arr = ['Jon', 'Stive', 'Ivan']
//let domArry = arr.map((el, index) => <li key={'ol_id_' + index}>{el}</li>)
//let objDTO = {
//1: {
//    value: 'One',
//},
//2: {
//    value: 'Two',
//},
//3: {
//     value: 'Three'
// }
//}
//let domArryFromObject = Object.keys(objDTO).map((index) => <li key={'id_' + index}> {objDTO[index].value} number {index}</li>);
//ReactDom.render(
//    <div>
//        <h1>Hello React</h1>
//        <ol>{domArry}</ol>
//        <ul>{domArryFromObject}</ul>
//    </div>,
//    appContainer

//)