import Select , {SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import Accordion  from "../Accordion/Accordion";
import React from "react";

export default {
    title:'Select',
    component: Select
}



const Template:Story<SelectPropsType> = args => <Select {...args}/>
export const SelectStory = Template.bind({})
const callBackProps  = {
    value:'1',
    onChange: action('value changed')
}
SelectStory.args = {
    ...callBackProps,

    items:[
        {value:'1',title:'Nike'},
        {value:'2',title:'Adidas'},
        {value:'3',title:'Puma'}
    ]

}