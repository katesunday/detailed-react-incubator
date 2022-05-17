import React , {useState} from 'react';
import './App.css';
import Accordion from "./Accordion/Accordion";
import Rating from "./Rating/Rating";
import UncontrolledOnOff from "./UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledRating from "./UncontrolledRating/UncontrolledRating";
import OnOff from "./OnOff/OnOff";
import UncontrolledAccordion from "./UncontrolledAccordion/UncontrolledAccordion";


function App() {
    let [ratingValue , setRatingValue] = useState(0)
    let [collapsed , setCollapsed] = useState(true)
    let [on , setOn] = useState(false)
    const onClickList = () => {
      
    }


    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion title={'menu'} collapsed={collapsed}
                       onClick={setCollapsed} items={[]}
            onClickList={onClickList}/>
            <UncontrolledAccordion title={'users'}/>
            {/*<OnOff on={on} onClick={setOn}/>*/}
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

        </div>
    );
}


export default App;
