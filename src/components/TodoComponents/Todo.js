import React from 'react';

const ToDo = props => {
    let verboseClassName = 'item';
    if (props.item.completed) {
        verboseClassName = verboseClassName + ' completed';
    }

    const handlClick = () => {
        props.toggleCompleted(props.item.id)
    };

    return (
        <div onClick={handlClick} className={verboseClassName}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default ToDo;