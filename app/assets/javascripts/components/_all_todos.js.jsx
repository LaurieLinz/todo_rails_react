var AllTodos = React.createClass({
  handleDelete(id) {
        this.props.handleDelete(id);
    },

  onUpdate(todo) {
    this.props.onUpdate(todo);
  },  

  render() {
    var todos= this.props.todos.map((todo) => {
      return (
        <div key={todo.id}>
          <Todo todo={todo}
              handleDelete={this.handleDelete.bind(this, todo.id)}
              handleUpdate={this.onUpdate} />
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