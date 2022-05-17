import React , {ChangeEvent , useRef , useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'unControlledInput' ,
}

export const unControlledInput = () => <input/>
// export const ControlledInput = () => <input value={'incubator'}/>
export const TrackingValueOFunControlledInput = () => {
    const [value , setValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const actualValue = e.currentTarget.value
        setValue(actualValue);
    }
    return <input value={value} onChange={(e) => onChange(e)}
    />
}
export const GetValueOfUnControlledInput = () => {
    const [value , setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref = {inputRef} id = {'inputId'} /> <button onClick={()=>save()}>save </button>actual Value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue,setParentValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

return <input value = {parentValue} onChange={(e)=>onChange(e)}/>
}
export const ControlledCheckBox = () => {
    const [parentValue,setParentValue] = useState(false)
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={(e)=>onChange(e)}/>
}
export const ControlledSelect = () => {
    const [parentValue,setParentValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value = {parentValue} onChange={(e)=>onChange(e)}>
        <option value="none">none</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
    </select>
}
