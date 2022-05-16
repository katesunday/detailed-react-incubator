import React , {useState} from 'react';
import './App.css';
import Accordion from "./Accordion";
import Rating from "./Rating";
import UncontrolledOnOff from "./UncontrolledOnOff";
import UncontrolledRating from "./UncontrolledRating";
import OnOff from "./OnOff";
import UncontrolledAccordion from "./UncontrolledAccordion";


function App() {
    let [ratingValue , setRatingValue] = useState(0)
    let [collapsed , setCollapsed] = useState(true)
    let [on , setOn] = useState(false)


    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion title={'menu'} collapsed={collapsed} onClick={setCollapsed}/>
            <UncontrolledAccordion title={'users'}/>
            {/*<OnOff on={on} onClick={setOn}/>*/}
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

        </div>
    );
}


export default App;
