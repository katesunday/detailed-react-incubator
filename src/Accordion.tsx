import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (value: boolean) => void
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
                props.onClick(!props.collapsed)
            }}/>
            {!props.collapsed && <AccordionBody/>}

        </div>

    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <><h3 onClick={() => props.onClick()}>{props.title}</h3></>
    )
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

export default Accordion;