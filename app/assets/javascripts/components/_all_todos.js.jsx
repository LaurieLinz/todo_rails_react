var AllTodos = React.createClass({
  handleDelete(id) {
        this.props.handleDelete(id);
    },

  render() {
    var todos= this.props.todos.map((todo) => {
      return (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <button onClick={this.handleDelete.bind(this, todo.id)} >Delete</button>
        </div>
      )
    });

    return(
      <div>
        {todos}
      </div>
    )
  }  
})