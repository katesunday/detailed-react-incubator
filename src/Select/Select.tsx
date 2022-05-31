import React from 'react';


export type ItemType = {
    title:string,
    value:any
}

export type SelectPropsType = {
    value:string
    onChange:(value:string)=>void
    items:ItemType[]
}

const Select = (props:SelectPropsType) => {
    const selectedItem = props.items.find((el)=>el.value ===props.value)
    return (
        <>
            <h5>{selectedItem && selectedItem.title}</h5>
            <select value={selectedItem && selectedItem.title}
                    onChange={(e)=>props.onChange(e.currentTarget.value)}>

                {props.value && props.items.map((el)=>{
                    return <option key={el.value}>{el.title} </option>
                })}
            </select>
        </>

    );
};

export default Select;