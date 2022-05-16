import React from 'react';

type RatingPropsType = {
    value: number
        //0 | 1 | 2 | 3 | 4 | 5
    onClick:(num:number)=>void
}

function Rating(props: RatingPropsType) {
    return (
        <>
            Rating:
            <Star selected={props.value >0} onClick = {props.onClick} value = {1}/>
            <Star selected={props.value >1} onClick = {props.onClick} value = {2}/>
            <Star selected={props.value >2} onClick = {props.onClick} value = {3}/>
            <Star selected={props.value >3} onClick = {props.onClick} value = {4}/>
            <Star selected={props.value >4} onClick = {props.onClick} value = {5}/>
        </>
    )
}
type StarPropsType = {
    selected:boolean
    onClick:(num:number)=>void
    value:number
}
function Star(props:StarPropsType) {
    return <span onClick={()=>props.onClick(props.value)}>
        {props.selected ? <b> star </b> : ' star '}
        </span>
}

export default Rating;