import React, {Component, PropTypes} from 'react'
import Todo from './Todo'


class TodoList extends Component{
  render(){
    const {todos, onDeleteClick, onTodoClick} = this.props;
    let list = []
    todos.map(todo => {
      list.push(
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Todo
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            onClick={() => onTodoClick(todo.key)}
          />
          <div>
          <button type="button" className="close" aria-label="Close"
            onClick={() => onDeleteClick(todo.key)}>
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
        </div>
      )
    });
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList;
