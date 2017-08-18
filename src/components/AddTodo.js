import React, {Component, PropTypes} from 'react'

class AddTodo extends Component {

  render(){
    let input;
    return(
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'nowrap'}}>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.onAddTodo(input.value)
          input.value = ''
        }}>
        <div style={{display: 'flex', flexWrap: 'nowrap'}}>
          <input className="form-control" type="text" placeholder="What needs to be done?"
            ref={node => {
            input = node
          }} />
          <button className="btn btn-success btn-rounded" type="submit">
            Add Todo
          </button>
          </div>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default AddTodo;
