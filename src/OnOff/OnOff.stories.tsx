import React , {useState} from 'react';
import {action} from "@storybook/addon-actions";
import OnOff from "./OnOff";


export default {
    title: 'OnOff stories' ,
    component: OnOff ,
}
const callBack = action('on or off clicked')
export const OnMode = ()=> <OnOff on={true} onClick={callBack}/>
export const OffMode = ()=> <OnOff on={false} onClick={callBack}/>
export const ChangeMode = ()=>{
    const [on,setOn] = useState(false)
    return <OnOff on={on} onClick={setOn}/>
}

