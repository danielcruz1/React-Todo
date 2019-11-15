import React from 'react';
import ToDoList from '../src/components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const list = [
  // {
  //     task: 'Organize Garage',
  //     id: 1528817077286,
  //     completed: false
  //   },
  //   {
  //     task: 'Bake Cookies',
  //     id: 1528817084358,
  //     completed: false
  //   }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todo: list,
      otherState: 'this other state'
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted(itemId) {
    console.log('toggleCompleted: ', itemId);

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  }

  clearCompleted = () => {
    console.log('clearCompleted');
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.completed;
      })
    });
  };

  addItem = itemName => {
    console.log('add item: ', itemName);

    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: itemName,
          id: Date.now(),
          completed: false,
        }
      ]
    });
  };

  //***STRETCH***
  componentWillMount() {
    localStorage.getItem('todo') && this.setState({
      todo: JSON.parse(localStorage.getItem('todo')),
      isLoading: false
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todo', JSON.stringify(nextState.todo));
    localStorage.setItem('todoDate', Date.now());
  }
  //***STRETCH***

  render() {
    console.log('rendering...');
    return (
      <div className='App'>
        <div className='header'>
          <h1>To Do List</h1>
          <ToDoForm addItem={this.addItem} />
         </div> 
        <ToDoList 
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}        
        />
      </div>
    );
  }
}

export default App;
