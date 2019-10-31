import React from 'react';
import { Persist } from 'react-persist';


class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ''
        };
    }

    handleChanges = e => {
        this.setState({
            itemName: e.target.value
        });
    };

    handleSubmit = e => { 
        e.preventDefault();
        if (this.state.itemName !== '') {
            this.props.addItem(this.state.itemName);
            this.setState({
                itemName: ''
            });
        }
    };

    render() {
        console.log('rendering form');
        return(
          
            <form onSubmit={this.handleSubmit}>
                
                <input
                    onChange={this.handleChanges}
                    type='text'
                    name='item'
                    value={this.state.itemName}
                    placeholder='What do you need to do?'
                />

                <button>Add</button>
           
            </form>
        );
    }
}

export default ToDoForm;