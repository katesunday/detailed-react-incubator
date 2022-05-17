import React , {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion , {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion stories' ,
    component: Accordion ,
    onClick:{
        table:{
            category:'Events'
        }
    }
}
const callBack = action('on or off clicked')

const Template:Story<AccordionPropsType> = args => <Accordion {...args}/>
export const collapsed2 = Template.bind({})
const callBackProps  = {
    collapsed:true,
    onClick: callBack
}
collapsed2.args = {
    ...callBackProps,
     title:'tryam',
    items:[{title:'sasha',value:'active'},{title:'masha',value:'off'}]

}
export const unCollapsed = Template.bind({})
unCollapsed.args = {
    ...callBackProps,
    title:'trololo',
    items:[{title:'sasha',value:'active'},{title:'masha',value:'off'}]

}

//const ChangeMode:Story<AccordionPropsType> = Template.bind({})


export const ChangeMode:Story<AccordionPropsType> = (args)=>{
    const [on,setOn] = useState(false)
    return <Accordion {...args} onClick={setOn} collapsed={on} onClickList={callBack}/>
}
ChangeMode.args = {
    title:'collapseMe',
    items:[{title:'sasha',value:'active'},{title:'masha',value:'off'}]

}


