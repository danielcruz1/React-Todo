import React from 'react';

const ToDo = props => {
    let verboseClassName = 'item';
    if (props.item.completed) {
        verboseClassName = verboseClassName + ' completed';
    }

    const handleClick = () => {
        props.toggleCompleted(props.item.id)
    };

    return (
        <div onClick={handleClick} className={verboseClassName}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default ToDo;