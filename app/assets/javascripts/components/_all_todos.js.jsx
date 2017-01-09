var AllTodos = React.createClass({
  render() {
    var todos= this.props.todos.map((todo) => {
      return (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
        </div>
      )
    });

    return(
      <div>
        {todos}
      </div>
    )
  }  
});