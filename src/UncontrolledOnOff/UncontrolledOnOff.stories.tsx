import React , {useState} from 'react';
import UncontrolledOnOff , {OnOffPropsType} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title:'UncontrolledOnOff',
    component:UncontrolledOnOff
}
const callback = action('on or off clicked')

const Template:Story<OnOffPropsType> = args => <UncontrolledOnOff {...args}/>
export const onMode = Template.bind({})

export const OffMode = ()=> <UncontrolledOnOff onChange={callback}/>