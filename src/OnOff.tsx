import React  from 'react';

type OnOffPropsType = {
    on: boolean
    onClick:(on:boolean)=>void
}
const OnOff = (props: OnOffPropsType) => {

    const styleConditionOn = {backgroundColor: props.on ?"green" : ''}
    const styleConditionOff = {backgroundColor: props.on ?"" : 'red'}
    const styleConditionInd = {backgroundColor: props.on ?"green" : 'red'}
    return (
        <div>

            <div className='onStyle' style={styleConditionOn} onClick={()=>props.onClick(true)}>on</div>
            <div className='offStyle' style={styleConditionOff} onClick={()=>props.onClick(false)}>off</div>
            <div className='indicator' style={styleConditionInd}> </div>
        </div>
    );
};
   
export default OnOff;