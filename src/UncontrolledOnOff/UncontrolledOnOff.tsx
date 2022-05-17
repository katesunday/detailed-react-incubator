import React , {useState} from 'react';
import s from './OnOff.module.css'

export type OnOffPropsType = {
    onChange: (value: boolean) => void
}
const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on , setOn] = useState(false)
    const styleConditionOn = {backgroundColor: on ? "green" : ''}
    const styleConditionOff = {backgroundColor: on ? "" : 'red'}
    const styleConditionInd = {backgroundColor: on ? "green" : 'red'}
    const onClicked = () => {
        props.onChange(true)
        setOn(true)
    }
    const offClicked = () => {
        props.onChange(false)
        setOn(false)
    }

return (
    <div>
        <div className={s.onStyle} style={styleConditionOn} onClick={onClicked}>on</div>
        <div className={s.offStyle} style={styleConditionOff} onClick={offClicked}>off</div>
        <div className={s.indicator} style={styleConditionInd}> </div>
    </div>
)
}
;

export default UncontrolledOnOff;