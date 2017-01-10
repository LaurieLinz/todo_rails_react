var Body = React.createClass({
  getInitialState(){
    return { todos: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/todos.json', (response) => { this.setState({ todos: response}) });
  },

  handleSubmit(todo) {
        var newState = this.state.todos.concat(todo);
        this.setState({ todos: newState })
    },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/todos/${id}`,
      type: 'DELETE',
      success:() => {
           this.removeTodoClient(id);
      }
    });
  },

  removeTodoClient(id) {
    var newTodos = this.state.todos.filter((todo) => {
        return todo.id != id;
    });

    this.setState({ todos: newTodos });
  },  

  render() {
    return (
      <div>
        <NewTodo handleSubmit={this.handleSubmit} />
        <AllTodos todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    )
  }
});