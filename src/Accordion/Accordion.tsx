import React from 'react';

export type ItemType = {
    title:string,
    value:any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (value: boolean) => void
    items: ItemType[]
    onClickList:(value:any)=>void
}
export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
                props.onClick(!props.collapsed)
            }}/>
            {!props.collapsed && <AccordionBody items={props.items} onClickList={props.onClickList}/>}

        </div>

    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <><h3 onClick={() => props.onClick()}>{props.title}</h3></>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClickList:(value:any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <>
            <ul>
                {props.items.map((el,index) =>
                    <li onClick={()=>{props.onClickList(el.value)}} key={index}>{el.title}</li>)}
            </ul>
        </>
    )
}

export default Accordion;